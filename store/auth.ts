import { User } from "../types";
import create from "zustand";
import { AuthResponse } from "../interfaces/Response";

interface MyState {
  user: User;
  token: string;
  msg: string;
  setUser: (response: AuthResponse) => void;
}

const authStore = create<MyState>()((set, get) => ({
  user: { email: "", id: "", avatar: "", suscription: "" },
  token: "",
  msg: "",
  setUser(response) {
    const { token, msg, ...user } = response;

    set({
      user,
      token,
      msg,
    });
  },
}));

export default authStore;
