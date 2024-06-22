import React, { useState, useEffect } from "react";
import { LoadPostDetailApi, PostEditApi, DeletePostApi } from "../api/post";
import { GetHeartCountApi, AddHeartApi, RemoveHeartApi } from "../api/heart";
import {
  AddCommentApi,
  DeleteCommentApi,
  LoadCommentsApi,
} from "../api/comment";
import { useParams, useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import styled from "styled-components";

const PostContainer = styled.div`
  margin-bottom: 2vh;
  list-style-type: none;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: 2vh;
  padding-bottom: 1vh;
`;

const ContentTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 0.5;
`;
const TitleAndHeart = styled.div`
  display: flex;
  flex-direction: column;
`;

const Hearts = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1vh;
`;
const HeartButtonsOFF = styled.button`
  margin-left: 0.8vw;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const HeartButtonsON = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Likes = styled.div`
  margin-bottom: 2vh;
`;

const PostButtons = styled.div`
  flex-direction: row;
`;
const FixAndDel = styled.div``;

const FixButton = styled.button`
  margin-right: 1vw;
`;

const DeleteButton = styled.button``;

const CommentsWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  margin-top: 1.5vh;
`;

const CommentWrite = styled.div`
  display: flex;
  flex-direction: row;
`;

const CommentInput = styled.textarea`
  border: none;
  &:focus {
    outline: none;
  }
  height: 45px;
  width: 86vw;
  border: 2px solid #ced4da;
  resize: none;
  margin-bottom: 1.5vh;
`;

const CommentUploadButton = styled.button`
  height: 52px;
  margin-left: 1vw;
  width: 5.2vw;
`;

const CommentBox = styled.div`
  width: 100%;
`;

const Comments = styled.div`
  display: flex;
  flex-direction: column;

  width: 86vw;
  align-items: start;
  justify-content: start;
`;

const CommentItem = styled.div`
  display: flex;
  border-bottom: 2px solid #ced4da;
  margin-bottom: 1vh;
  justify-content: space-between;
  width: 100%;
`;

const DelIcon = styled(MdDeleteOutline)`
  font-size: 25px;
  color: #73787d;
  cursor: pointer;
`;

const CommentAuthor = styled.div`
  font-size: 14px;
  color: #495057;
  margin-bottom: 0.5vh;
  margin-right: 1vw;
`;

const CommentContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InputText = styled.textarea`
  border: none;
  &:focus {
    outline: none;
  }
  height: 30vh;
  width: 50vw;
  margin-top: 2vh;
  border: solid 1.5px #ced4da;
  border-radius: 5px;
  resize: none;
`;

function DetailPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [commentContent, setCommentContent] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await LoadPostDetailApi(postId);
        const heartData = await GetHeartCountApi(postId);
        const commentsData = await LoadCommentsApi(postId);
        console.log("Heart data:", heartData);
        setPost(postData);
        setLiked(postData.liked);
        setLikeCount(heartData);
        setComments(commentsData);
        console.log("Heart like data:", likeCount);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);
  const handleAddHeart = async () => {
    try {
      await AddHeartApi(postId);
      setLiked(true);
      setLikeCount((prevCount) => prevCount + 1);
    } catch (err) {
      console.error("Error adding heart:", err);
    }
  };

  const handleRemoveHeart = async () => {
    try {
      await RemoveHeartApi(postId);
      setLiked(false);
      setLikeCount((prevCount) => prevCount - 1);
    } catch (err) {
      console.error("Error removing heart:", err);
    }
  };

  const handleEditPost = async () => {
    try {
      const updatedPost = {
        title: editedTitle,
        content: editedContent,
      };
      const updatedData = await PostEditApi(postId, updatedPost);
      setPost(updatedData);
      setIsEditing(false);
    } catch (err) {
      console.error("Error editing post:", err);
    }
  };

  const handleDeletePost = async () => {
    try {
      await DeletePostApi(postId);
      navigate("/");
    } catch (err) {
      console.error("게시글 삭제 에러:", err);
    }
  };

  const handleAddComment = async () => {
    try {
      const newComment = await AddCommentApi(postId, commentContent);
      const updatedComments = await LoadCommentsApi(postId); // 댓글 등록 후 최신 댓글 목록을 가져옵니다.
      setComments(updatedComments);
      setCommentContent("");
    } catch (err) {
      console.error("댓글 등록 에러:", err);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await DeleteCommentApi(commentId);
      console.log("댓 삭제");
      const updatedComments = await LoadCommentsApi(postId);
      setComments(updatedComments);
    } catch (err) {
      console.error("댓글 삭제 에러:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!post) return <div>No post found</div>;

  return (
    <PostContainer>
      <TitleAndHeart>
        {isEditing ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            style={{
              border: "solid 1.5px #ced4da",
              borderRadius: "5px",
              height: "2.5vh",
            }}
          />
        ) : (
          <ContentTitle>{post.title}</ContentTitle>
        )}

        {isEditing ? (
          <></>
        ) : (
          <Hearts>
            {" "}
            <HeartButtonsON onClick={handleAddHeart}>❤ 좋아요</HeartButtonsON>
            <HeartButtonsOFF onClick={handleRemoveHeart}>
              💔 좋아요 취소
            </HeartButtonsOFF>
          </Hearts>
        )}
      </TitleAndHeart>
      {isEditing ? (
        <InputText
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <p>{post.content}</p>
      )}
      {post.image && <img src={post.image} alt={post.title} width="200" />}
      <p>작성자: {post.nickname}</p>
      <p>작성일: {new Date(post.createdDate).toLocaleString()}</p>
      <Likes>{likeCount} 명이 이 글을 좋아합니다. </Likes>
      <PostButtons>
        {isEditing ? (
          <>
            <FixButton onClick={handleEditPost}>저장</FixButton>
            <DeleteButton onClick={() => setIsEditing(false)}>
              취소
            </DeleteButton>
          </>
        ) : (
          <FixAndDel>
            <FixButton
              onClick={() => {
                setIsEditing(true);
                setEditedTitle(post.title);
                setEditedContent(post.content);
              }}
            >
              게시글 수정
            </FixButton>
            <DeleteButton onClick={handleDeletePost}>게시글 삭제</DeleteButton>
          </FixAndDel>
        )}
      </PostButtons>
      <CommentsWrapper>
        <CommentWrite>
          <CommentInput
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
          />
          <CommentUploadButton onClick={handleAddComment}>
            댓글 등록
          </CommentUploadButton>
        </CommentWrite>
        <Comments>
          <CommentBox>
            {comments.map((comment, index) => (
              <CommentItem key={index}>
                <CommentContent>
                  <CommentAuthor>{comment.commentAuthorNickname}</CommentAuthor>
                  {comment.content}
                </CommentContent>
                <DelIcon
                  onClick={() =>
                    handleDeleteComment(comment.commentId || comment.id)
                  }
                />
              </CommentItem>
            ))}
          </CommentBox>
        </Comments>
      </CommentsWrapper>
    </PostContainer>
  );
}

export default DetailPage;
