import { AuthResponse } from "../interfaces/Response";
import create from "zustand";

interface MyState {
  avatar?: string;
  suscription?: string;
  email: string;
  token: string;
  setUser: (response: AuthResponse) => void;
}

const authStore = create<MyState>()((set, get) => ({
  email: "",
  avatar: "",
  suscription: "",
  token: "",
  setUser(response) {
    const { token, email, avatar, suscription } = response;
    if (token) {
      set({
        avatar,
        token,
        email,
        suscription,
      });
    }
  },
}));

export default authStore;
