import { CreateNewPostApi } from "../api/post";
import { useState } from "react";
import styled from "styled-components";
const Box = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  input#content {
    height: 200px;
  }
  input {
    padding: 10px;
    margin: 3px;
  }
`;
const Write = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const onUploadImage = (e) => {
    setFile(e.target.files[0]);
  };
  const onUploadImageButtonClick = () => {
    const request = {
      title: title,
      content: content,
    };
    CreateNewPostApi(request, file);
  };
  return (
    <>
      <Box>
        <h1>게시글 작성 페이지</h1>
        <input
          type="text"
          placeholder="제목 작성하기"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          id="content"
          type="text"
          placeholder="내용 작성하기"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></input>
        <input type="file" accept="image/*" onChange={onUploadImage}></input>
        <button label="이미지 업로드" onClick={onUploadImageButtonClick}>
          업로드
        </button>
      </Box>
    </>
  );
};

export default Write;
