import { postPost } from "../api/post";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WritePage = () => {
	const naviate = useNavigate();
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [file, setFile] = useState(null);
	const PostPost = async () => {
		if (title && content && file) {
			const request = {
				title,
				content,
			};
			const res = await postPost(request, file);
			console.log("게시글 작성 결과", res);
			if (res.status === 201) {
				naviate(`/detail/${res.data.postId}`);
			} else if (res.response.status === 400) {
				alert("로그인 후 게시글 작성 가능합니다.");
			}
		} else alert("모든 항목을 전부 작성했는지 다시 확인해주세요!");
	};
	return (
		<>
			<h1>게시글 작성 페이지</h1>
			<button onClick={PostPost}>작성 완료</button>
			<Input
				type="text"
				placeholder="제목"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<Textarea
				type="text"
				placeholder="내용"
				value={content}
				onChange={(e) => setContent(e.target.value)}
			/>
			<span>이미지 첨부 (필수) </span>
			<input
				type="file"
				accept="image/*"
				onChange={(e) => setFile(e.target.files[0])}
			/>
			{file && (
				<img
					src={URL.createObjectURL(file)}
					alt={title + " 이미지"}
					width="90%"
				/>
			)}
		</>
	);
};

export default WritePage;

const Input = styled.input`
	width: 100%;
`;

const Textarea = styled.textarea`
	width: 100%;
	min-height: 200px;
	resize: none;
`;
