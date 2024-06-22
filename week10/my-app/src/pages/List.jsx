import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PostListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 20px;
`;
const formatDate = (datetime) => {
  const date = new Date(datetime);
  return date.toLocaleDateString();
};

const PostListItem = styled.div`
  border: 1px solid #ccc;
  padding: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const PostImage = styled.img`
  max-width: 00px;
  height: auto;
  border-radius: 5px;
`;

const PostTitle = styled.p`
  font-size: 1.2em;
  font-weight: bold;
  margin: 0.5em 0;
`;

const PostNickname = styled.p`
  color: #555;
  margin: 0.5em 0;
`;

const PostContent = styled.p`
  color: #333;
  margin: 0.5em 0;
`;

const PostDate = styled.p`
  font-size: 0.8em;
  color: #888;
  margin: 0.5em 0;
`;

const ListPage = ({ posts, setPosts }) => {
  const navigate = useNavigate();

  if (!posts) return <p>Loading...</p>;

  return (
    <PostListItemContainer>
      {posts.map((post) => (
        <PostListItem
          key={post.postId}
          onClick={() => navigate(`/posts/${post.postId}`)}
        >
          <PostTitle>제목: {post.title}</PostTitle>
          <PostNickname>닉네임: {post.nickname}</PostNickname>
          <PostContent>내용: {post.content}</PostContent>
          {post.image && <PostImage src={post.image} alt={post.title} />}
          <PostDate>{formatDate(post.createdDate)}</PostDate>
        </PostListItem>
      ))}
    </PostListItemContainer>
  );
};

export default ListPage;
