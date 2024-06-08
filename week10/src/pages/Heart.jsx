import { useState, useEffect } from "react";
import { getMyHeartPost } from "../api/heart";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Heart = () => {
    const [posts, setPosts] = useState(null);
    const nav = useNavigate();

    useEffect(() => {
        async function getPosts() {
            const res = await getMyHeartPost();
            setPosts(res);
        }

        if (!localStorage.getItem("efubtoken")) {
            alert("로그인 후 이용해주세요.");
            nav("/register");
        } else getPosts();
    }, []);

    return (
        <>
            {localStorage.getItem("efubtoken") ? (
                posts ? (
                    posts.map((post) => (
                        <Link to={`/detail/${post.postId}`}>
                            <div>{post.title}</div>
                            <div>{post.nickname}</div>
                            <img src={post.image} />
                            <div>{post.content}</div>
                        </Link>
                    ))
                ) : (
                    "Loading"
                )
            ) : (
                <div>로그인 하세요</div>
            )}
        </>
    );
};

export default Heart;
