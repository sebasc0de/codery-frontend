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
    console.log("normal error", response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

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
    const response = (await request.json()) as AuthResponse;
    console.log(response);
    return response;
  } catch (err) {}
};
