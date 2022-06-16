export const startSession = async (email: string, password: string) => {
  // Check if user exists

  try {
    const request = await fetch("http://localhost:8080/auth/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    console.log("mi errors", err);
  }
};
