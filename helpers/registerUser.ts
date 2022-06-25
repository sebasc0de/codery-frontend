import { User } from "../types";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  setUser: (user: User) => void
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
    setUser(response);
  } catch (err) {}
};
