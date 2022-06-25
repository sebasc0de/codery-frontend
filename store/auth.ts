import { User } from "../types";
import create from "zustand";

interface MyState {
  user: User;
  setUser: (response: any) => void;
}

const authStore = create<MyState>()((set, get) => ({
  user: {
    email: "",
    id: "",
    avatar: "",
    membership: "",
  },
  setUser(response) {
    set({ user: response });
  },
}));

export default authStore;
