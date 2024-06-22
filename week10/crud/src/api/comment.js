import client from ".";

export const PostComment = async (data) => {
    try {
        const response = await client.post(`/comments`, data);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const GetComment = async (postId) => {
    try {
        const response = await client.get(`/posts/${postId}/comments`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const DeleteComment = async (commentId) => {
    try {
        const response = await client.delete(`/comments/${commentId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};