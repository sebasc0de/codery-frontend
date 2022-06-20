import { User } from "../types";
import create from "zustand";

interface MyState {
  user: User;
  msg: string;
  setUser: (response: any) => void;
}

const userStore = create<MyState>()((set, get) => ({
  user: {
    email: "",
    id: "",
    avatar: "",
    membership: "",
  },
  msg: "",
  setUser(response) {
    response.msg ? set({ msg: response.msg }) : set({ user: response });
  },
}));

export default userStore;
