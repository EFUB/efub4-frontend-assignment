import client from ".";
import axios from "axios";

export const CreateNewPostApi = async (request, image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );
    const res = await client.post("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const GetPostsApi = async () => {
  try {
    const res = await client.get("/posts");
    // console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const DeletePostApi = async (postId) => {
  try {
    await client.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${postId}`);
  } catch (err) {
    console.log(err);
  }
};

export const GetPostDetailApi = async (postId) => {
  try {
    if (postId) {
      const res = await client.get(
        `${process.env.REACT_APP_SERVER_URL}/posts/${postId}`
      );
      // console.log(res.data);
      return res.data;
    }
  } catch (err) {
    console.log(err);
  }
};
