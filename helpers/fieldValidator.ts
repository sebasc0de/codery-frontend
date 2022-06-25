import validator from "validator";

export function fieldValidator(type: string, value: string) {
  if (type === "number" && !validator.isNumeric(value)) {
    console.log("solo numeros");
  }
  return true;
}
