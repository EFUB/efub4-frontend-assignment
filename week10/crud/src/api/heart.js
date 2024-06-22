import client from ".";

export const PostHeart = async (postId) => {
    try {
        const response = await client.post(`/posts/${postId}/hearts`);
        console.log(response);
        return response;
    } catch (error) {
        return null;
    }
};

export const DeleteHeart = async (postId) => {
    try {
        const response = await client.delete(`/posts/${postId}/hearts`);
        console.log(response);
        return response;
    } catch (error) {
        return null;
    }
};

export const GetHowManyHearts = async (postId) => {
    try {
        const response = await client.get(`/posts/${postId}/hearts`);
        console.log(response);
        return response.data;
    } catch (error) {
        return null;
    }
};

export const GetHeartedPosts = async () => {
    try {
        const response = await client.get(`/posts/hearts`);
        return response.data;
    } catch (error) {
        return null;
    }
};