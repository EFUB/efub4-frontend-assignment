import client from ".";

// 게시글 등록
export const postPost = async (request, image) => {
	try {
		const formData = new FormData();
		formData.append("image", image);
		// JSON 객체를 Blob 타입으로 변환, 원본은 application/json임을 명시
		formData.append(
			"request",
			new Blob([JSON.stringify(request)], { type: "application/json" })
		);
		const res = await client.post("/posts", formData, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		return res;
	} catch (err) {
		console.log("게시글 등록 실패", err);
		return err;
	}
};

// 게시글 전체 조회
export const getPostList = async () => {
	try {
		const res = await client.get("/posts");
		return res;
	} catch (err) {
		console.log("게시글 전체 조회 실패", err);
		return err;
	}
};

// 게시글 상세 조회
export const getPostDetail = async (postId) => {
	try {
		const res = await client.get(`/posts/${postId}`);
		return res;
	} catch (err) {
		console.log("게시글 상세 조회 실패", err);
		return err;
	}
};

// 게시글 수정
export const patchPost = async (postId, request) => {
	try {
		const res = await client.patch(`/posts/${postId}`, request);
		return res;
	} catch (err) {
		console.log("게시글 수정 실패", err);
		return err;
	}
};

// 게시글 삭제
export const deletePost = async (postId) => {
	try {
		const res = await client.delete(`/posts/${postId}`);
		return res;
	} catch (err) {
		console.log("게시글 삭제 실패", err);
		return err;
	}
};
