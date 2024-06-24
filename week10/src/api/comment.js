import client from ".";

// 게시글에 댓글 달기
export const postComment = async (postId, content) => {
	try {
		const res = await client.post("/comments", {
			postId,
			content,
		});
		return res;
	} catch (err) {
		console.log("게시글에 댓글 달기 실패", err);
		return err;
	}
};

// 게시글 댓글 반환
export const getComment = async (postId) => {
	try {
		const res = await client.get(`/posts/${postId}/comments`);
		return res;
	} catch (err) {
		console.log("게시글 댓글 반환 실패", err);
		return err;
	}
};

// 댓글 삭제
export const deleteComment = async (commentId) => {
	try {
		const res = await client.delete(`/comments/${commentId}`);
		return res;
	} catch (err) {
		console.log("댓글 삭제 실패", err);
		return err;
	}
};
