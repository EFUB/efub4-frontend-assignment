import client from ".";

export const GetHeartCountApi = async (postId) => {
  try {
    const res = await client.get(`/posts/${postId}/hearts`);
    console.log("Heart count response:", res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const AddHeartApi = async (postId) => {
  try {
    const res = await client.post(`/posts/${postId}/hearts`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const RemoveHeartApi = async (postId) => {
  try {
    const res = await client.delete(`/posts/${postId}/hearts`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const GetLikedPostsApi = async () => {
  try {
    const res = await client.get("/posts/hearts");
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
