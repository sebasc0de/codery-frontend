export const createProduct = async (
  name: string,
  price: string | number,
  image: string,
  token: string
) => {
  try {
    const request = await fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Auth: token,
      },
      body: JSON.stringify({ name, price: Number(price), image }),
    });
    const response = await request.json();
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async (token: string, name?: string) => {
  try {
    const request = await fetch(`http://localhost:8080/product/?name=${name}`, {
      headers: {
        "Content-Type": "application/json",
        Auth: token,
      },
    });

    const response = await request.json();
    return response;
  } catch (err) {}
};
