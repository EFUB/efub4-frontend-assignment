import client from ".";

// 게시글 등록
export const CreateNewPostApi = async (request, image) => {
    try {
        const formData = new FormData();
        formData.append("image", image);
        formData.append(
            "request",
            new Blob([JSON.stringify(request)], { type: "application/json" })
        );

        //서버 요청
        const res = await client.post("/posts", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

export const GetAllPostApi = async () => {
    try {
        const res = await client.get("/posts");
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const GetPostDetailApi = async (postId) => {
    try {
        const res = await client.get(`/posts/${postId}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const EditPostApi = async (postId, data) => {
    try {
        const res = await client.patch(`/posts/${postId}`, data);
        console.log(`게시글 수정 성공 : `, res.data);
    } catch (error) {
        console.log(error);
    }
};

export const DeletePostApi = async (postId) => {
    try {
        const res = await client.delete(`/posts/${postId}`);
        console.log(`게시글 삭제 성공 : `, res.data);
    } catch (error) {
        console.log(error);
    }
};
