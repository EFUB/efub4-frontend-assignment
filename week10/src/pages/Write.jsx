import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CreateNewPostApi } from "../api/post";

const Write = () => {
    const [post, setPost] = useState({ title: "", content: "" });
    const [file, setFile] = useState(null);

    const nav = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("efubtoken")) {
            alert("로그인 후 이용해주세요.");
            nav("/register");
        }
    }, []);

    const onChangesPost = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const onUploadImage = (e) => {
        setFile(e.target.files[0]);
    };

    const onUploadImageButtonClick = () => {
        const request = {
            title: post.title,
            content: post.content,
        };

        CreateNewPostApi(request, file);
    };

    return (
        <>
            {localStorage.getItem("efubtoken") ? (
                <div>
                    <h1>게시글 작성 페이지</h1>
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
                        <input
                            type="file"
                            accept="image/*"
                            onChange={onUploadImage}
                        />
                        <button
                            label="이미지 업로드"
                            onClick={onUploadImageButtonClick}
                        >
                            업로드
                        </button>
                    </div>
                </div>
            ) : (
                <div>로그인 해주세용</div>
            )}
        </>
    );
};

export default Write;
