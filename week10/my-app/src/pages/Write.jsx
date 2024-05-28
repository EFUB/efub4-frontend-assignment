import { CreateNewPostApi } from "../api/post";
import { useState } from "react";

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
    <div>
      <input
        type="text"
        placeholder="제목 작성하기"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="내용 작성하기"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={onUploadImage} />
      <button label="이미지 업로드" onClick={onUploadImageButtonClick}>
        업로드
      </button>
    </div>
  );
};

export default CreatePage;
