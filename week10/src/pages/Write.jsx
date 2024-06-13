import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CreateNewPostApi } from "../api/post";
import styled from "styled-components";

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
        if (post.title.trim() === "") {
            alert("제목을 입력해주세요.");
        } else if (post.content.trim() === "") {
            alert("내용을 입력해주세요.");
        } else if (file === null) {
            alert("사진을 첨부해주세요.");
        } else {
            const request = {
                title: post.title,
                content: post.content,
            };

            CreateNewPostApi(request, file);
            nav("/");
        }
    };

    return (
        <div>
            <h1 style={{ marginLeft: "15px" }}>게시글 작성</h1>
            <Container>
                <Title
                    type="text"
                    value={post.title}
                    name="title"
                    placeholder="제목을 입력하세요"
                    onChange={onChangesPost}
                />
                <Content
                    type="text"
                    value={post.content}
                    name="content"
                    placeholder="내용을 입력하세요"
                    onChange={onChangesPost}
                />
                <div style={{ display: "flex" }}>
                    <File
                        type="file"
                        accept="image/*"
                        onChange={onUploadImage}
                    />
                    <Upload
                        label="이미지 업로드"
                        onClick={onUploadImageButtonClick}
                    >
                        업로드
                    </Upload>
                </div>
            </Container>
        </div>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15px;
`;

const Title = styled.input`
    height: 30px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    margin-bottom: 5px;
    padding-left: 5px;
`;

const Content = styled.textarea`
    min-height: 300px;
    font-family: "Pretendard-Regular";
    font-size: 15px;
    margin-bottom: 5px;
    padding: 5px;
    resize: none;
`;

const File = styled.input`
    font-family: "Pretendard-Regular";
    margin-bottom: 5px;
`;

const Upload = styled.button`
    width: 100px;
    font-family: "Pretendard-Regular";
    margin-left: auto;
`;

export default Write;
