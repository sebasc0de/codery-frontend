export const loginUser = async (
  email: string,
  password: string,
  setLoading: (state: boolean) => void
) => {
  // Check if user exists
  try {
    const request = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await request.json();
    setLoading(false);

    if (response.errors) return { msg: response.errors[0].msg };

    return response;
  } catch (err) {
    setLoading(false);
    return { msg: "Hubo un error con el servidor" };
  }
};
