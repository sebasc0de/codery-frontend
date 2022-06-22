export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const request = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const response = await request.json();
    if (response.errors) return { msg: response.errors[0].msg };
    return response;
  } catch (err) {}
};
