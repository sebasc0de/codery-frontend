import create from "zustand";

interface MyState {
  name: string;
  price: number;
  image: string;
  setProduct: ({ name, price, image }: setProductProps) => void;
}

const productStore = create<MyState>()((set, get) => ({
  name: "",
  price: 0,
  image: "",
  setProduct({ name, price, image }) {
    set({ name, price, image });
  },
}));

export default productStore;

// Props

interface setProductProps {
  name?: string;
  price?: number;
  image?: string;
}
