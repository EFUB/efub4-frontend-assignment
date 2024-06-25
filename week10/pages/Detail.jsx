import { useState, useEffect } from "react";
import { PostDetail, EditPost, DeletePost } from "../api/post";
import { PutHeart, DeleteHeart, CntHeart } from "../api/heart";
import { CreateComment, DeleteComment, GetComment } from "../api/comment";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
const Title = styled.div``;
const Content = styled.div``;
const Image = styled.img`
  height: 300px;
  width: 300px;
`;
const CommentList = styled.div``;
const CommentItem = styled.div``;
const Detail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [likeCnt, setLikeCnt] = useState(0);
  const [comment, setComment] = useState();
  const [comments, setComments] = useState([]);
  const [commentCnt, setCommentCnt] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        const data = await PostDetail(postId);
        setPost(data);
        setEditedTitle(data.title);
        setEditedContent(data.content);
        const heartData = await CntHeart(postId);
        setLikeCnt(heartData);
        const commentData = await GetComment(postId);
        setComments(commentData);
        setCommentCnt(commentData.length);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPostDetail();
  }, [postId]);
  const handleEdit = async () => {
    try {
      await EditPost(postId, { title: editedTitle, content: editedContent });
      setIsEditing(false);
      const data = await PostDetail(postId);
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    try {
      await DeletePost(postId);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  if (!post) {
    return <div>Loading...</div>;
  }
  const like = async () => {
    try {
      await PutHeart(postId);
      setLikeCnt((prev) => prev + 1);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteLike = async () => {
    try {
      await DeleteHeart(postId);
      setLikeCnt((prev) => prev - 1);
    } catch (err) {
      console.log(err);
    }
  };
  const createComment = async () => {
    if (!comment.trim()) return;
    try {
      const newComment = await CreateComment(postId, { content: comment });
      setComments((prev) => [...prev, newComment]);
      setCommentCnt((prev) => prev + 1);
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };
  const deleteComment = async (commentId) => {
    try {
      await DeleteComment(commentId);
      setComments((prev) =>
        prev.filter((comment) => comment.commentId !== commentId)
      );
      setCommentCnt((prev) => prev - 1);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>게시글 상세 페이지</h1>
      {isEditing ? (
        <div>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          ></input>
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          ></textarea>
          <button onClick={handleEdit}>수정 완료</button>
          <button onClick={() => setIsEditing(false)}>취소</button>
        </div>
      ) : (
        <>
          <Title>{post.title}</Title>
          <div>{post.nickname}</div>
          <div>{post.createdDate}</div>
          <button onClick={() => setIsEditing(true)}>게시글 수정</button>
          <button onClick={handleDelete}>게시글 삭제</button>
          <Content>{post.content}</Content>
          <Image src={post.image} alt={post.title}></Image>
        </>
      )}
      <br></br>
      <button onClick={like}>좋아요</button>
      <button onClick={deleteLike}>좋아요 취소</button>
      <div>{likeCnt}명이 좋아요를 눌렀습니다</div>
      <div>댓글 {commentCnt}개</div>
      <input
        placeholder="댓글 작성하기"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button onClick={createComment}>작성</button>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.commentId}>
            작성자:{comment.commentAuthorNickname}
            <br></br>
            {comment.content}
            <br></br>
            <button onClick={() => deleteComment(comment.commentId)}>
              삭제
            </button>
            <br></br>
          </CommentItem>
        ))}
      </CommentList>
    </div>
  );
};

export default Detail;
