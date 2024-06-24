import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostDetail, patchPost, deletePost } from "../api/post";
import { getComment, postComment, deleteComment } from "../api/comment";
import { getHeartCount, postHeart, deleteHeart } from "../api/heart";
import styled from "styled-components";

const DetailPage = () => {
	const navigate = useNavigate();
	const { postId } = useParams();
	const [isEdit, setIsEdit] = useState(false);

	// post API
	const [post, setPost] = useState({});
	const { title, nickname, createdDate, modifiedDate, content, image } = post;
	const [newPost, setNewPost] = useState({});
	useEffect(() => {
		setNewPost({ title, content });
	}, [post]);

	const GetPostDetail = async () => {
		const res = await getPostDetail(postId);
		console.log("게시글 상세 조회 결과", res);
		setPost(res.data); // 게시글 상세 정보 저장
	};
	const PatchPost = async (e) => {
		e.preventDefault();
		const request = {
			title: newPost.title,
			content: newPost.content,
		};
		const res = await patchPost(postId, request);
		console.log("게시글 수정 결과", res);
		if (res.status === 200) {
			setIsEdit(false);
			GetPostDetail();
		} else if (res.response.status === 403) {
			alert("본인이 작성한 글이 아니므로 수정할 수 없습니다.");
			setIsEdit(false);
		} else if (res.response.status === 400) alert("로그인 후 사용 가능합니다.");
	};
	const DeletePost = async () => {
		const res = await deletePost(postId);
		console.log("게시글 삭제 결과", res);
		if (res.status === 200)
			navigate("/"); // 정상적으로 삭제되었다면 목록으로 이동
		else if (res.response.status === 403)
			alert("본인이 작성한 글이 아니므로 삭제할 수 없습니다.");
		else if (res.response.status === 400) alert("로그인 후 사용 가능합니다.");
	};

	// comment API
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState("");

	const GetComments = async () => {
		const res = await getComment(postId);
		console.log("댓글 조회 결과", res);
		setComments(res.data); // 댓글 저장
	};
	const PostComment = async (e) => {
		e.preventDefault(); // form submit 이벤트 새로고침 방지
		if (newComment) {
			const res = await postComment(postId, newComment);
			console.log("댓글 작성 결과", res);
			if (res.status === 201) {
				GetComments(); // 댓글 새로 가져와 업데이트
				setNewComment(""); // 댓글 작성창 초기화
			} else if (res.response.status === 400)
				alert("로그인 후 사용 가능합니다.");
		} else alert("댓글 내용을 작성해주세요.");
	};
	const DeleteComment = async (commentId) => {
		const res = await deleteComment(commentId);
		console.log("댓글 삭제 결과", res);
		if (res.status === 200) GetComments(); // 댓글 새로 가져와 업데이트
		else if (res.response.status === 403)
			alert("본인이 작성한 댓글이 아니므로 삭제할 수 없습니다.");
		else if (res.response.status === 400) alert("로그인 후 사용 가능합니다.");
	};

	// heart API
	const [heart, setHeart] = useState(0);

	const GetHeartCount = async () => {
		const res = await getHeartCount(postId);
		console.log("좋아요 개수 조회 결과", res);
		setHeart(res.data); // 좋아요 개수 저장
	};
	const PostHeart = async () => {
		const res = await postHeart(postId);
		console.log("좋아요 결과", res);
		if (res.status === 201) GetHeartCount(); // 좋아요 개수 새로 가져와 업데이트
		else if (res.response.status === 400)
			alert(
				res.response.data.message === "이미 좋아요를 누른 게시물입니다."
					? "이미 좋아요한 게시글입니다."
					: "로그인 후 사용 가능합니다."
			);
	};
	const DeleteHeart = async () => {
		const res = await deleteHeart(postId);
		console.log("좋아요 취소 결과", res);
		if (res.status === 200) GetHeartCount(); // 좋아요 개수 새로 가져와 업데이트
		else if (res.response.status === 404)
			alert("이미 좋아요를 취소한 게시글입니다.");
		else if (res.response.status === 400) alert("로그인 후 사용 가능합니다.");
	};

	useEffect(() => {
		GetPostDetail();
		GetComments();
		GetHeartCount();
	}, []);

	return (
		<>
			<h1>{isEdit ? "게시글 수정 중" : "게시글 상세 페이지"}</h1>
			{isEdit ? (
				<input
					value={newPost.title}
					onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
				/>
			) : (
				<h2>{title}</h2>
			)}
			<p>
				<u>{nickname}</u>
				{" | "}
				{new Date(
					new Date(modifiedDate || createdDate).getTime() + 1000 * 60 * 60 * 9
				).toLocaleString()}
				{modifiedDate && " 수정"}
			</p>
			{isEdit ? (
				<>
					<button onClick={() => setIsEdit(false)}>취소</button>
					<button onClick={PatchPost}>수정 완료</button>
				</>
			) : (
				<>
					<button onClick={() => setIsEdit(true)}>게시글 수정</button>
					<button onClick={DeletePost}>게시글 삭제</button>
				</>
			)}
			<hr />
			{isEdit ? (
				<Textarea
					value={newPost.content}
					onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
				/>
			) : (
				<p>
					{content && content.includes("\n")
						? content.split("\n").map((line) => (
								<span>
									{line}
									<br />
								</span>
						  ))
						: content}
				</p>
			)}
			{isEdit && <i>*이미지는 수정 불가합니다.</i>}
			<Img src={image} alt={title + " 이미지"} />
			<br />
			<br />
			{!isEdit && (
				<>
					<button onClick={PostHeart}>좋아요 </button>
					<button onClick={DeleteHeart}>좋아요 취소</button>
					<p>{heart}명이 좋아요를 눌렀습니다.</p>
					<hr />
					<p>댓글 {comments.length}개</p>
					<div>
						{comments.map((comment) => (
							<Comment key={comment.commentId}>
								<u>{comment.commentAuthorNickname}</u>
								<button onClick={() => DeleteComment(comment.commentId)}>
									삭제
								</button>
								<p>{comment.content}</p>
							</Comment>
						))}
					</div>
					<form onSubmit={PostComment}>
						<input
							type="text"
							placeholder="댓글 작성하기"
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
						/>
						<button type="submit">작성</button>
					</form>
				</>
			)}
		</>
	);
};

export default DetailPage;

const Textarea = styled.textarea`
	width: 100%;
	min-height: 200px;
	resize: none;
`;

const Img = styled.img`
	width: 90%;
	height: auto;
`;

const Comment = styled.div`
	margin: 10px 0;
`;
