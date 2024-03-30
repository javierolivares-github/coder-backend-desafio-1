// Desafío Entregable
// Funciones con ECMAScript y ECMAScript avanzado
//  Crear un programa ProductManager que gestione un conjunto de productos.

// Debe contar con una variable 'products' con un arreglo vacío.
let products = [];

// Debe contar con: 
//  Una función 'addProduct' para agregar productos al arreglo de productos.
//  Debe validar que no se se repita el campo 'code' y que todos los campos sean obligatorios.
//  Al agregar el producto, debe crearse con un id autoincrementable.
const addProducts = (title, description, price, thumbnail, code, stock) => {
  // Objeto newProduct a agregar:
  const newProduct = {
    id: products.length + 1,
    title,
    description,
    price,
    thumbnail,
    code,
    stock
  };

  // Condición que valida que todos los campos sean obligatorios:
  if (Object.values(newProduct).includes(undefined)) {
    console.log("Todos los campos son obligatorios.");
    return;
  }

  // Condición que valida que no se repita el campo code:
  const productsExists = products.find((product) => product.code === code);
  if (productsExists) {
    console.log(`El producto ${title} con el código ${code} ya existe.`);
    return;
  }

  // Agregar el nuevo producto al arreglo de productos:
  products.push(newProduct);
}

// Debe contar con:
//   Una función 'getProducts' el cual debe devolver un arreglo con todos los productos creados hasta ese momento.
const getProducts = () => {
  console.log(products);
  return products;
}

// Debe contar con:
//   Una función 'getProductById' el cual debe buscar en el arreglo el producto que coincida con el id.
//   En caso de no coincidir nigún id, mostrar en consola un error 'Not found'.
const getProductById = (id) => {
  // Encuentra el producto por su id
  const product = products.find((product) => product.id === id);

  // Condición que valida que al no existir el producto en el arreglo, muestre un mensaje de error en consola.
  if(!product) {
    console.log(`No se encontró el producto con el id ${id}`);
    return;
  }

  console.log(product);
  return product;
}


// TESTS
addProducts("Nike Pegasus 40 SE", "Zapatillas running para hombre", "129.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685887708%2Fthumbnail_562cb1af16.webp&w=640&q=75", "NP40SE");
addProducts("Nike Quest 5", "Zapatillas running para hombre", "76.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685887884%2Fthumbnail_eff486a70c.webp&w=640&q=75", "NQ5", 15);
addProducts("Nike Quest 5", "Zapatillas running para hombre", "76.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685887884%2Fthumbnail_eff486a70c.webp&w=640&q=75", "NQ5", 15);
addProducts("Jordan Stay Loyal 2", "Zapatillas Jordan para hombre", "116.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685833073%2Fthumbnail_63c509e967.webp&w=640&q=75", "JSL2", 10);
addProducts("Zoom Freak 4", "Zapatillas de básquetbol para hombre", "79.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685890611%2Fthumbnail_9ff2f47f38.webp&w=640&q=75", "ZF4", 7);
addProducts("Nike Downshifter 12", "Zapatillas running para hombre", "69.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685889490%2Fthumbnail_c2aeea8970.webp&w=640&q=75", "ND12", 9);


// VISUALIZACION
getProducts();

getProductById(3);
