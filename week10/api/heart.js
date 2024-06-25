import client from ".";
export const PutHeart = async (postId) => {
  try {
    const res = await client.post(`/posts/${postId}/hearts`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const DeleteHeart = async (postId) => {
  try {
    const res = await client.delete(`/posts/${postId}/hearts`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const CntHeart = async (postId) => {
  try {
    const res = await client.get(`/posts/${postId}/hearts`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const MyHeart = async () => {
  try {
    const res = await client.get(`/posts/hearts`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
