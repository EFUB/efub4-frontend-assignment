import client from ".";
export const CreateNewPostApi = async (request, image) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append(
      "request",
      new Blob([JSON.stringify(request)], { type: "application/json" })
    );

    const res = await client.post("/posts", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
export const PostList = async () => {
  try {
    const res = await client.get("/posts");
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const PostDetail = async (postId) => {
  try {
    const res = await client.get(`/posts/${postId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const EditPost = async (postId, updatedData) => {
  try {
    const res = await client.patch(`/posts/${postId}`, updatedData);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const DeletePost = async (postId) => {
  try {
    const res = await client.delete(`/posts/${postId}`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
