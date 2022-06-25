import productStore from "../store/product";
import { Camera } from "../icons/index";

export const ImageUploader = () => {
  const image = productStore((state) => state.image);

  return (
    <div className="imageUploader">
      <Camera />
      <img src={image || "./pizza.jpg"} className="object-cover w-full" />
    </div>
  );
};
