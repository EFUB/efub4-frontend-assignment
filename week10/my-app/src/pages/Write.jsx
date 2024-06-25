import { CreateNewPostApi } from "../api/post";
import { useState } from "react";
import styled from "styled-components";

const CreatePage = () => {
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
    <CreatePostContainer>
      <Input
        type="text"
        placeholder="제목 작성하기"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="내용 작성하기"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <FileInput type="file" accept="image/*" onChange={onUploadImage} />
      <UploadButton onClick={onUploadImageButtonClick}>업로드</UploadButton>
    </CreatePostContainer>
  );
};

export default CreatePage;

const CreatePostContainer = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;

  font-size: 16px;
`;

const FileInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
