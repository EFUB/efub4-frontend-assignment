import React, { useState, useEffect } from "react";
import { LoadPostsApi } from "../api/post";
import styled from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { isLoggedIn } from "../api/user";

function ListPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await LoadPostsApi();
        data.sort((a, b) => b.postId - a.postId);
        setPosts(data);
        console.log("Fetched data:", data);
        console.log("??");
      } catch (err) {
        setError(err);
        console.log("!!");
      } finally {
        setLoading(false);
      }
    };

    if (isLoggedIn()) {
      fetchPosts();
    }
  }, []);

  if (!isLoggedIn()) {
    return <Navigate to="/register" replace />;
  }
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const List = styled.div`
    margin-bottom: 2vh;
    list-style-type: none;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 2vh;
    padding-bottom: 1vh;
  `;
  const ListTitle = styled.div`
    margin-left: 5vw;
    margin-top: 3vh;
    font-size: 25px;
    font-weight: bold;
  `;

  const ContentTitle = styled.div`
    font-size: 17px;
    font-weight: bold;
    padding-bottom: 1vh;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
  `;

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <List key={post.postId}>
            <StyledLink to={`/detail/${post.postId}`}>
              <ContentTitle>{post.title}</ContentTitle>
              {post.image && (
                <img src={post.image} alt={post.title} width="200" />
              )}
              <p>작성자: {post.nickname}</p>
            </StyledLink>
          </List>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
