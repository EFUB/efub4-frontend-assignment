import client from ".";

export const LoadCommentsApi = async (postId) => {
  try {
    const res = await client.get(`/posts/${postId}/comments`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const AddCommentApi = async (postId, content) => {
  try {
    const res = await client.post("/comments", { postId, content });
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const DeleteCommentApi = async (commentId) => {
  try {
    const res = await client.delete(`/comments/${commentId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
