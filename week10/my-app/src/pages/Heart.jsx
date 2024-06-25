// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const PostListItemContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1em;
// `;

// const PostListItem = styled.div`
//   border: 1px solid #ccc;
//   padding: 1em;
//   border-radius: 5px;
//   cursor: pointer;
// `;

// const PostImage = styled.img`
//   max-width: 100%;
//   height: auto;
// `;

// const HeartPage = ({posts, setPosts}) => {
//   const navigate = useNavigate();

//   if (!posts) return <p>Loading...</p>;
//   return (
//     <PostListItemContainer>
//       {posts.map((post) => (
//         <PostListItem
//           key={post.postId}
//           onClick={() => navigate(`/posts/${post.postId}`)}
//         >
//           <p>제목: {post.title}</p>
//           <p>닉네임: {post.nickname}</p>
//           <p>내용: {post.content}</p>
//           <PostImage src={post.image} alt={post.title} />
//           <p>{post.createdDate}</p>
//           <p>{post.modifiedDate}</p>
//         </PostListItem>
//       ))}
//     </PostListItemContainer>
//   );
// };

// export default HeartPage;
