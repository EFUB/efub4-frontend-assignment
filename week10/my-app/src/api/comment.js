import client from ".";
import axios from "axios";

export const GetCommentApi = async (postId) => {
  try {
    if (postId) {
      const res = await client.get(
        `${process.env.REACT_APP_SERVER_URL}/posts/${postId}/comments`
      );
      console.log(res.data);
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const PostCommentApi = async (postId, content) => {
  try {
    await client.post(`${process.env.REACT_APP_SERVER_URL}/comments`, {
      postId,
      content,
    });
  } catch (err) {
    console.log(err);
  }
};

export const DeleteCommentApi = async (commentId) => {
  try {
    await client.delete(
      `${process.env.REACT_APP_SERVER_URL}/comments/${commentId}`
    );
  } catch (err) {
    console.log(err);
  }
};
