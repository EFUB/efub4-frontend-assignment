import client from ".";

export const postHeart = async (postId) => {
    try {
        const res = await client.post(`/posts/${postId}/hearts`);
        console.log(res);
        return res;
    } catch (err) {
        return err;
    }
};

export const deleteHeart = async (postId) => {
    try {
        const res = await client.delete(`/posts/${postId}/hearts`);
        console.log(res);
        return res;
    } catch (err) {
        return err;
    }
};

export const getHeartNum = async (postId) => {
    try {
        const res = await client.get(`/posts/${postId}/hearts`);
        return res.data;
    } catch (err) {
        return err;
    }
};

export const getMyHeartPost = async () => {
    try {
        const res = await client.get(`/posts/hearts`);
        return res.data;
    } catch (err) {
        return err;
    }
};

export const checkMyClick = async (postId) => {
    try {
        const res = await getMyHeartPost();
        const found = res.some((e) => {
            return e.postId == postId;
        });
        return found;
    } catch (err) {
        return err;
    }
};
