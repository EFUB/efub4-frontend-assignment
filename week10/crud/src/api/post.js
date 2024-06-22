import client from ".";

export const Write = async (request, image) => {
    try {
        const formData = new FormData();
        formData.append('image', image);
        formData.append(
            'request',
            new Blob([JSON.stringify(request)], { type: 'application/json' })
        );

        const res = await client.post('/posts', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });

        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

export const GetPosts = async () => {
    try {
        const response = await client.get(`/posts`);
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const GetPostDetail = async (postId) => {
    try {
        const response = await client.get(`/posts/${postId}`);
        console.log('API Response:', response.data);
        return response.data;
    } catch (error) {
        console.log('API Error:', error);
        return null;
    }
};

export const PatchPost = async (postId, data) => {
    try {
        const response = await client.patch(`/posts/${postId}`, data);
        console.log(`Patched Successfully: `, response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const DeletePost = async (postId) => {
    try {
        const response = await client.delete(`/posts/${postId}`);
        console.log(`Deleted Successfully: `, response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};