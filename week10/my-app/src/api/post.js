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
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

export const GetPostApi = async () => {
  try {
    const res = await client.get("/posts", {
      postId,
      nickname,
      title,
      content,
      image,
      createDate,
      modifiedDate,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
