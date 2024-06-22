import client from ".";

export const CreateComment = async (postId, commentData) => {
  try {
    const res = await client.post(`/comments`, {
      postId,
      ...commentData,
    });
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const GetComment = async (postId) => {
  try {
    const res = await client.get(`/posts/${postId}/comments`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const DeleteComment = async (commentId) => {
  try {
    const res = await client.delete(`/comments/${commentId}`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
