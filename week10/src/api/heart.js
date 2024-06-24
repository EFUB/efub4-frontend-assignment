import client from ".";

// 게시글 좋아요
export const postHeart = async (postId) => {
	try {
		const res = await client.post(`/posts/${postId}/hearts`);
		return res;
	} catch (err) {
		console.log("게시글 좋아요 실패", err);
		return err;
	}
};

// 게시글 좋아요 취소
export const deleteHeart = async (postId) => {
	try {
		const res = await client.delete(`/posts/${postId}/hearts`);
		return res;
	} catch (err) {
		console.log("게시글 좋아요 취소 실패", err);
		return err;
	}
};

// 게시글 좋아요 개수 반환
export const getHeartCount = async (postId) => {
	try {
		const res = await client.get(`/posts/${postId}/hearts`);
		return res;
	} catch (err) {
		console.log("게시글 좋아요 개수 반환 실패", err);
		return err;
	}
};

// 유저가 좋아요 누른 게시글 반환
export const getHeartedPost = async () => {
	try {
		const res = await client.get("/posts/hearts");
		return res;
	} catch (err) {
		console.log("유저가 좋아요 누른 게시글 반환 실패", err);
		return err;
	}
};
