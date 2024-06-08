import client from ".";

export const postComments = async (data) => {
    try {
        const res = await client.post(`/comments`, data);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
};

export const getComments = async (postId) => {
    try {
        const res = await client.get(`/posts/${postId}/comments`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteComments = async (commentId) => {
    try {
        const res = await client.delete(`comments/${commentId}`);
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};
