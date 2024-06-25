import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GetPostDetailApi, EditPostApi, DeletePostApi } from "../api/post";
import {
    postHeart,
    deleteHeart,
    getHeartNum,
    checkMyClick,
} from "../api/heart";
import { deleteComments, getComments, postComments } from "../api/comment";
import { JWTtest } from "../api/user";
import styled from "styled-components";

import heart from "../img/heart.png";

const Detail = () => {
    const { postId } = useParams();
    const [details, setDetails] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [post, setPost] = useState({ title: "", content: "" });
    const [heartNum, setHeartNum] = useState(0);
    const [myHeart, setMyheart] = useState(false);
    const [myComments, setMyComments] = useState("");
    const [commentsList, setCommentsList] = useState(null);
    const [myAccount, setMyAccount] = useState("");
    const nav = useNavigate();

    useEffect(() => {
        async function getDetails() {
            const res = await GetPostDetailApi(postId);
            setDetails(res);
            const res2 = await JWTtest();

            setMyAccount(res2.nickname);
        }

        async function getHeartNumInDetail() {
            const num = await getHeartNum(postId);
            setHeartNum(num);
        }

        async function getCommentsList() {
            const res = await getComments(postId);
            setCommentsList(res);
        }

        async function didIClickHeart() {
            const HeartHistory = await checkMyClick(postId);
            setMyheart(HeartHistory);
        }

        if (!localStorage.getItem("efubtoken")) {
            alert("로그인 후 이용해주세요.");
            nav("/register");
        } else {
            getDetails();
            getHeartNumInDetail();
            getCommentsList();
            didIClickHeart();
        }
    }, [postId]);

    useEffect(() => {
        async function updateHeartNum() {
            const num = await getHeartNum(postId);
            setHeartNum(num);
        }

        updateHeartNum();
    }, [myHeart, postId]);

    if (!details) {
        return <div>로딩 중...</div>;
    }

    const handleEditBtn = () => {
        setIsEdit(true);
    };

    const onSubmitEditPost = async () => {
        if (post.title.trim() === "") {
            alert("제목을 입력해주세요.");
        } else if (post.content.trim() == "") {
            alert("내용을 입력해주세요.");
        } else {
            await EditPostApi(postId, post);
            setIsEdit(false);
            window.location.reload();
        }
    };

    const onChangesPost = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const deletePost = async () => {
        await DeletePostApi(postId);
        alert("게시글 삭제 완료");
        nav(-1);
    };

    const onChangesMyComments = (e) => {
        const { value } = e.target;
        setMyComments(value);
    };

    const onSubmitMyComments = async (e) => {
        if (myComments.trim() === "") {
            alert("내용을 입력해주세요.");
        } else {
            const data = {
                postId: postId,
                content: myComments,
            };
            await postComments(data);
            window.location.reload();
        }
    };

    const onClickDeleteComments = async (commentId) => {
        console.log("실행 ", postId);
        await deleteComments(commentId);
        window.location.reload();
    };

    const onClickHeart = async () => {
        if (myHeart) {
            await deleteHeart(postId);
        } else {
            await postHeart(postId);
        }
        setMyheart(!myHeart);
    };

    return (
        <>
            {isEdit ? (
                <EditContainer>
                    <h1>게시글 수정</h1>
                    <EditTitle
                        type="text"
                        value={post.title}
                        name="title"
                        placeholder="제목"
                        onChange={onChangesPost}
                    />
                    <EditContent
                        type="text"
                        value={post.content}
                        name="content"
                        placeholder="내용"
                        onChange={onChangesPost}
                    />
                    <EditButton onClick={onSubmitEditPost}>
                        수정 완료
                    </EditButton>
                </EditContainer>
            ) : (
                <PostContainer>
                    <Title>{details.title}</Title>
                    <Nickname>{details.nickname}</Nickname>
                    <Date>{details.createdDate}</Date>

                    {myAccount === details.nickname && (
                        <Buttons>
                            <button onClick={handleEditBtn}>수정</button>
                            <button onClick={deletePost}>삭제</button>
                        </Buttons>
                    )}

                    <Heart onClick={onClickHeart}>{heartNum}</Heart>
                    <Image src={details.image} />
                    <Content>{details.content}</Content>
                    <RowLine />

                    <CommentList>
                        {commentsList
                            ? commentsList.map((e) => (
                                  <>
                                      <CommentWrapper>
                                          <CommentInfo>
                                              <div>
                                                  {e.commentAuthorNickname}
                                              </div>
                                              <div>{e.content}</div>
                                          </CommentInfo>

                                          {myAccount ===
                                              e.commentAuthorNickname && (
                                              <DeleteButton
                                                  onClick={() =>
                                                      onClickDeleteComments(
                                                          e.commentId
                                                      )
                                                  }
                                              >
                                                  X
                                              </DeleteButton>
                                          )}
                                      </CommentWrapper>
                                      <RowLine />
                                  </>
                              ))
                            : "loading..."}
                    </CommentList>

                    <CommentInput>
                        <textarea
                            type="text"
                            value={myComments}
                            placeholder="댓글을 입력해주세요!"
                            onChange={onChangesMyComments}
                        />
                        <button onClick={onSubmitMyComments}>댓글 전송</button>
                    </CommentInput>
                </PostContainer>
            )}
        </>
    );
};

const PostContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(7, auto);
    grid-template-columns: auto auto 1fr auto;
    grid-template-areas:
        "title title title heart"
        "nickname date . btns"
        "image image image image"
        "content content content content"
        "line line line line"
        "cmtList cmtList cmtList cmtList"
        "comment comment comment comment";
    align-items: center;

    padding: 10px;
`;

const Title = styled.div`
    grid-area: title;
    font-size: 40px;
    font-weight: bold;
`;

const Nickname = styled.div`
    grid-area: nickname;
    font-size: 20px;
    margin-right: 10px;
    align-self: first baseline;
`;

const Date = styled.div`
    grid-area: date;
    font-size: 15px;
    align-self: first baseline;
    color: black;
`;
const Heart = styled.button`
    grid-area: heart;
    justify-self: right;

    font-family: "Pretendard-Regular";
    font-size: 18px;
    color: white;

    width: 40px;
    height: 40px;
    margin-right: 5px;

    background-image: url(${heart});
    border: none;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: inherit;
`;

const Image = styled.img`
    grid-area: image;
    height: 400px;
`;

const Content = styled.div`
    grid-area: content;
    font-size: 18px;
    margin-top: 5px;
`;

const CommentList = styled.div`
    grid-area: cmtList;
    display: flex;
    flex-direction: column;
`;

const CommentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CommentInfo = styled.div``;

const DeleteButton = styled.button`
    border: none;
    border-radius: 30%;
    width: 25px;
    height: 25px;
    color: white;

    font-family: "Pretendard-Regular";
`;

const CommentInput = styled.div`
    grid-area: comment;
    display: flex;
    align-items: center;

    & > :first-child {
        resize: none;
        font-family: "Pretendard-Regular";
        font-size: 18px;
        flex-grow: 1;
    }

    & > :last-child {
        font-family: "Pretendard-Regular";
        font-size: 15px;
        background-color: #38ef7d;
        color: white;
        border: none;
        border-radius: 20px;
        height: 40px;
        padding: 6px;
        margin-left: 5px;
    }
`;

const Buttons = styled.div`
    grid-area: btns;
    & > * {
        font-family: "Pretendard-Regular";
        font-size: 15px;

        border: none;
        border-radius: 10px;
        margin-right: 5px;

        width: 40px;
    }
`;

const EditContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`;

const EditTitle = styled.input`
    height: 30px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    margin-bottom: 5px;
    padding-left: 5px;
`;

const EditContent = styled.textarea`
    min-height: 300px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    margin-bottom: 5px;
    padding: 5px;
    resize: none;
`;

const EditButton = styled.button`
    font-family: "Pretendard-Regular";
    font-size: 15px;
    width: 100px;
    margin-left: auto;
`;

const RowLine = styled.div`
    grid-area: line;
    border-bottom: 1px solid #11998e76;
    width: 100%;
    justify-self: center;

    margin: 5px 0;
`;

export default Detail;
