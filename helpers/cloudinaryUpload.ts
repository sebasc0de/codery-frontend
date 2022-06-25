export const cloudinaryUpload = async (image: File) => {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "codery");

  try {
    const request = await fetch(
      "https://api.cloudinary.com/v1_1/codery-app/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const response = await request.json();
    console.log(response);
    return response.secure_url;
  } catch (err) {
    console.log(err);
  }
};
