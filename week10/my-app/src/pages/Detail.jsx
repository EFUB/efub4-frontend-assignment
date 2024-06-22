import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPostDetailApi, DeletePostApi } from "../api/post";
import {
  DeleteHeartApi,
  GetHeartApi,
  PostHeartApi,
  FindIfLiked,
} from "../api/heart";
import { FaHeart } from "react-icons/fa";
import {
  PostCommentApi,
  GetCommentApi,
  DeleteCommentApi,
} from "../api/comment";
import styled from "styled-components";

const PostContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 20px;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostTitle = styled.h2`
  margin: 0;
`;

const HeartIcon = styled(FaHeart)`
  cursor: pointer;
  color: ${(props) => (props.postLiked ? "red" : "gray")};
  font-size: 24px;
`;

const HeartCount = styled.span`
  font-size: 18px;
  margin-left: 8px;
`;

const PostInfo = styled.div`
  margin-top: 20px;
`;

const PostAuthor = styled.p`
  font-weight: bold;
`;

const PostContent = styled.p`
  margin: 10px 0;
`;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;

const PostDates = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Date = styled.span`
  font-size: 12px;
  color: #888;
`;

const CommentSection = styled.div`
  margin-top: 20px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

const CommentText = styled.p`
  margin-left: 20px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

const NoComments = styled.p`
  color: #888;
  margin-left: 20px;
`;

const CommentInput = styled.input`
  margin-left: 20px;
  width: calc(100% - 100px);
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  margin-left: 20px;
  margin-top: 20px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const DetailPage = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [postDetail, setPostDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [heart, setHeart] = useState(0);
  const [postLiked, setPostLiked] = useState();

  async function getPostDetail() {
    try {
      setPostDetail(null);
      const data = await GetPostDetailApi(postId);
      setPostDetail(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function deletePost(postId) {
    try {
      await DeletePostApi(postId);
      setPosts(posts.filter((post) => post.postId !== postId));
      navigate("/posts");
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchComments(postId) {
    try {
      const data = await GetCommentApi(postId);
      setComments(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleCommentSubmit() {
    try {
      await PostCommentApi(postId, newComment);
      setNewComment("");
      fetchComments(postId);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteComment(commentId) {
    try {
      await DeleteCommentApi(commentId);
      setComments(
        comments.filter((comment) => comment.commentId !== commentId)
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function GetLikePost() {
    /*좋아요 반환*/
    try {
      const data = await GetHeartApi(postId);
      setHeart(data);
    } catch (err) {
      console.log(err);
    }
  }

  async function PostLikePost() {
    /*좋아요 누르기*/
    if (!postLiked) {
      try {
        await PostHeartApi(postId);
        GetLikePost();
        setPostLiked(true);
        getPostDetail();
      } catch (err) {
        console.log(err);
      }
    } else {
      await DeleteLikePost(postId);
      setPostLiked(false);
      GetLikePost();
      getPostDetail();
    }
  }

  async function DeleteLikePost(postId) {
    /*좋아요 취소*/
    try {
      await DeleteHeartApi(postId);
      getPostDetail();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    GetLikePost();
    try {
      FindIfLiked(postId).then((liked) => {
        setPostLiked(liked);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getPostDetail();
    fetchComments(postId);
    GetLikePost();
  }, [postId]);

  if (!postDetail) return <p>Loading...</p>;

  return (
    <>
      <PostContainer>
        <PostHeader>
          <PostTitle>{postDetail.title}</PostTitle>
          <HeartIcon onClick={PostLikePost} postLiked={postLiked} />
          <HeartCount>{heart}</HeartCount>
        </PostHeader>
        <PostInfo>
          <PostAuthor>{postDetail.nickname}</PostAuthor>
          <PostContent>{postDetail.content}</PostContent>
          {postDetail.image && (
            <PostImage src={postDetail.image} alt={postDetail.title} />
          )}
          <PostDates>
            <Date>{postDetail.createdDate}</Date>
            <Date>{postDetail.modifiedDate}</Date>
          </PostDates>
        </PostInfo>
      </PostContainer>
      <CommentSection>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment key={comment.commentId}>
              <CommentText>{comment.content}</CommentText>
              <DeleteButton
                onClick={() => handleDeleteComment(comment.commentId)}
              >
                삭제
              </DeleteButton>
            </Comment>
          ))
        ) : (
          <NoComments>댓글이 없습니다.</NoComments>
        )}
        <CommentInput
          type="text"
          placeholder="댓글을 작성하세요!"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <SubmitButton onClick={handleCommentSubmit}>댓글 작성</SubmitButton>
      </CommentSection>
    </>
  );
};

export default DetailPage;
