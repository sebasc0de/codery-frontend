import { User } from "../types";
import create from "zustand";

interface MyState {
  user: User;
  setUser: (user: User) => void;
}

const userStore = create<MyState>()((set, get) => ({
  user: {
    archived: false,
    email: "",
    id: "",
    role: "",
    avatar: "",
  },
  setUser(user) {
    set({
      user,
    });
  },
}));

export default userStore;
