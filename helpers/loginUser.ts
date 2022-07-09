import { AuthResponse } from "../interfaces/Response";

export const loginUser = async (email: string, password: string) => {
  // Check if user exists
  try {
    const request = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const response = (await request.json()) as AuthResponse;
    return response;
  } catch (err) {
    console.log(err);
  }
};
