import validator from "validator";

export function fieldValidator(type: string, value: string) {
  console.log(value);

  if (type === "email" && !validator.isEmail(value))
    return "Debes ingresar un correo valido";

  if (type === "number" && !Number(value))
    return "Debes ingresar un numero como precio";

  return true;
}
