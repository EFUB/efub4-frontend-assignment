import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CreateNewPostApi } from "../api/post";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../api/user";

const All = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div``;

const PostTitleInput = styled.input`
  width: 50vw;
  margin-bottom: 25px;
  margin-top: 3vh;
  margin-left: 3vw;
  border: solid 1.5px #ced4da;
  border-radius: 5px;
  height: 2.5vh;
`;

const PostBox = styled.div`
  border: 2px solid black;
  height: 30vh;
  width: 50vw;
`;

const InputText = styled.textarea`
  margin-left: 3vw;
  border: none;
  &:focus {
    outline: none;
  }
  height: 30vh;
  width: 50vw;
  border: solid 1.5px #ced4da;
  border-radius: 5px;
  margin-bottom: 2vh;
  resize: none;
`;

const Postbtn = styled.button``;

function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/register");
    }
  }, [navigate]);

  const onUploadImage = (e) => {
    setFile(e.target.files[0]);
  };

  const onUploadImageButtonClick = () => {
    const request = {
      title: title,
      content: content,
    };

    CreateNewPostApi(request, file);
    navigate("/");
    window.location.reload();
  };

  return (
    <All>
      <PostTitleInput
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <InputText
        type="text"
        placeholder="내용을 입력해 주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={onUploadImage}
        style={{ marginLeft: "3vw", marginBottom: "2vh" }}
      />
      <button
        label="글 작성 업로드"
        onClick={onUploadImageButtonClick}
        style={{ marginLeft: "3vw", width: "6vw" }}
      >
        업로드
      </button>
    </All>
  );
}

export default WritePage;
