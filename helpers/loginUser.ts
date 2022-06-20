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
    return response;
  } catch (err) {
    console.log(err);
  }
};
