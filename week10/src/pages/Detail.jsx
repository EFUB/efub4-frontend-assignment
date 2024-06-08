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

        getDetails();
        getHeartNumInDetail();
        getCommentsList();
        didIClickHeart();
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
        await EditPostApi(postId, post);
        setIsEdit(false);
        window.location.reload();
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
        const data = {
            postId: postId,
            content: myComments,
        };
        await postComments(data);
        window.location.reload();
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
            {myAccount == details.nickname ? (
                isEdit ? (
                    <button onClick={onSubmitEditPost}>수정완료</button>
                ) : (
                    <div>
                        <button onClick={onClickHeart}>{heartNum}</button>
                        <button onClick={handleEditBtn}>수정하기</button>
                        <button onClick={deletePost}>삭제하기</button>
                    </div>
                )
            ) : (
                <button onClick={onClickHeart}>{heartNum}</button>
            )}
            {isEdit ? (
                <div>
                    <input
                        type="text"
                        value={post.title}
                        name="title"
                        placeholder="제목"
                        onChange={onChangesPost}
                    />
                    <textarea
                        type="text"
                        value={post.content}
                        name="content"
                        placeholder="내용"
                        onChange={onChangesPost}
                    />
                </div>
            ) : (
                <div>
                    <div>{details.createdDate}</div>
                    <div>{details.title}</div>
                    <div>{details.nickname}</div>
                    <img src={details.image} />
                    <div>{details.content}</div>
                    {commentsList
                        ? commentsList.map((e) => (
                              <div>
                                  <div>{e.commentAuthorNickname}</div>
                                  <div>{e.content}</div>
                                  {myAccount == e.commentAuthorNickname ? (
                                      <button
                                          onClick={() =>
                                              onClickDeleteComments(e.commentId)
                                          }
                                      >
                                          댓글 삭제
                                      </button>
                                  ) : null}
                              </div>
                          ))
                        : "loading..."}
                    <textarea
                        type="text"
                        value={myComments}
                        placeholder="댓글을 입력해주세요!"
                        onChange={onChangesMyComments}
                    />
                    <button onClick={onSubmitMyComments}>댓글 전송</button>
                </div>
            )}
        </>
    );
};

export default Detail;
