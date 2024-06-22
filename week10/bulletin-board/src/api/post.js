import client from ".";
export const CreateNewPostApi = async (requset, image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "request",
      new Blob([JSON.stringify(requset)], { type: "application/json" })
    );

    const res = await client.post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const LoadPostsApi = async () => {
  try {
    const res = await client.get("/posts");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const LoadPostDetailApi = async (postId) => {
  try {
    const res = await client.get(`/posts/${postId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const PostEditApi = async (postId, updatedPost) => {
  try {
    const res = await client.patch(`/posts/${postId}`, updatedPost);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const DeletePostApi = async (postId) => {
  try {
    const res = await client.delete(`/posts/${postId}`);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
