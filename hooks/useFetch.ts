import { ExpressError, Response } from "../interfaces/Response";
// Response
// Formatear la response si es error
// Recibir una funcion

import { useEffect, useState } from "react";

export function useFetch<T extends Response>() {
  // Handle fetch response state
  const [response, setResponse] = useState<T>();

  // Handle errors state
  const [errors, setErrors] = useState<ExpressError[]>();

  // Handle loading state
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (response?.errors) {
      setErrors(response.errors);
    }
  }, [response]);

  return { response, loading, errors, setResponse, setLoading };
}
