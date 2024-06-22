import React, { useState, useEffect } from "react";
import { GetLikedPostsApi } from "../api/heart";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../api/user";

const PostContainer = styled.div`
  margin-bottom: 2vh;
  list-style-type: none;
  margin-left: 3vw;
  margin-right: 3vw;
  padding-top: 2vh;
  padding-bottom: 1vh;
  border-bottom: solid 2px #97a857;
`;

const PostTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
`;

const PostContent = styled.div`
  margin-top: 1vh;
`;

const PostAuthor = styled.div`
  margin-top: 1vh;
  font-size: 14px;
  color: #495057;
`;

const HeartPage = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLikedPosts = async () => {
      try {
        const likedPostsData = await GetLikedPostsApi();
        setLikedPosts(likedPostsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    if (isLoggedIn()) {
      fetchLikedPosts();
    }
  }, []);

  if (!isLoggedIn()) {
    return <Navigate to="/register" replace />;
  }
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (likedPosts.length === 0) return <div>No liked posts found</div>;

  return (
    <div>
      {likedPosts.map((post) => (
        <PostContainer
          key={post.id}
          onClick={() => navigate(`/detail/${post.postId}`)}
        >
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
          <PostAuthor>작성자: {post.nickname}</PostAuthor>
        </PostContainer>
      ))}
    </div>
  );
};
export default HeartPage;
