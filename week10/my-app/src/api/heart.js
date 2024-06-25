import client from ".";
import axios from "axios";

export const GetHeartApi = async (postId) => {
  try {
    if (postId) {
      const res = await client.get(`/posts/${postId}/hearts`);
      // console.log(res);
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const PostHeartApi = async (postId) => {
  try {
    const res = await client.post(`/posts/${postId}/hearts`);
    // console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};

export const DeleteHeartApi = async (postId) => {
  try {
    await client.delete(`/posts/${postId}/hearts`);
  } catch (err) {
    console.log(err);
  }
};

export const GetUserHeartApi = async () => {
  try {
    const res = await client.get(`/posts/hearts`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const FindIfLiked = async (postId) => {
  var liked = false;
  try {
    const list = await GetUserHeartApi();
    if (list.length > 0) {
      list.forEach(function (post) {
        if (post.postId.toString() == postId) {
          liked = true;
        }
      });
    }
  } catch (err) {
    console.log(err.message);
  }
  return liked;
};
