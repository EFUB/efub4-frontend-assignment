import { useState, useEffect } from "react";
import { GetAllPostApi } from "../api/post";
import { Link } from "react-router-dom";

const List = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        async function getPosts() {
            const res = await GetAllPostApi();
            setPosts(res);
        }

        getPosts();
    }, []);

    return (
        <>
            {posts
                ? posts.map((post) => (
                      <Link to={`detail/${post.postId}`}>
                          <div>{post.title}</div>
                          <div>{post.nickname}</div>
                          <img src={post.image} />
                          <div>{post.content}</div>
                      </Link>
                  ))
                : "Loading"}
        </>
    );
};

export default List;
