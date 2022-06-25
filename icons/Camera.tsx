import { cloudinaryUpload } from "../helpers/cloudinaryUpload";
import { useRef } from "react";
import productStore from "../store/product";

export const Camera = () => {
  const setImage = productStore((state) => state.setProduct);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadHandler = (target: HTMLInputElement) => {
    if (target.files) {
      cloudinaryUpload(target.files[0]).then((image) => {
        setImage({ image });
      });
    } else return null;
  };

  return (
    <div>
      <input
        onChange={(e) => uploadHandler(e.target)}
        type="file"
        id="uploadFile"
        ref={fileInputRef}
        className="hidden"
      />
      <svg
        onClick={() => fileInputRef.current?.click()}
        className="camera"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M194.6 32H317.4C338.1 32 356.4 45.22 362.9 64.82L373.3 96H448C483.3 96 512 124.7 512 160V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V160C0 124.7 28.65 96 64 96H138.7L149.1 64.82C155.6 45.22 173.9 32 194.6 32H194.6zM256 384C309 384 352 341 352 288C352 234.1 309 192 256 192C202.1 192 160 234.1 160 288C160 341 202.1 384 256 384z" />
      </svg>
    </div>
  );
};