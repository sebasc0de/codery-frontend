export const createProduct = async (
  name: string,
  price: number,
  image: string
) => {
  try {
    const request = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, image }),
    });
    const response = await request.json();
    if (response) return "Producto creado con exito";
  } catch (err) {
    console.log(err);
  }
};
