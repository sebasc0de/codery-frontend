import { User } from "../types";

export const loginUser = async (
  email: string,
  password: string,
  setUser: (user: User) => void
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
    setUser(response);
  } catch (err) {
    return { msg: "Hubo un error con el servidor" };
  }
};
