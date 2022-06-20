import { User } from "../types";
import create from "zustand";

interface MyState {
  user: User;
  errors: Object;
  setUser: (response: any) => void;
}

const userStore = create<MyState>()((set, get) => ({
  user: {
    email: "",
    id: "",
    avatar: "",
    membership: "",
  },
  errors: {},
  setUser(response) {
    response.error ? set({ errors: response.error }) : set({ user: response });
  },
}));

export default userStore;
