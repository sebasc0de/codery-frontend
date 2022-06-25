import { fieldValidator } from "../helpers/fieldValidator";
import { useState } from "react";

export function useField<T>(initialValues: T) {
  const [value, setValue] = useState(initialValues);

  const onChange = (target: HTMLInputElement) => {
    setValue((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  return {
    value,
    onChange,
  };
}
