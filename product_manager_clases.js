class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const newProduct = {
      id: this.products.length + 1,
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    if (Object.values(newProduct).includes(undefined)) {
      console.log("Todos los campos son obligatorios.");
      return;
    }

    const productExists = this.products.find((product) => product.code === code);
    if (productExists) {
      console.log(`El producto ${title} con el código ${code} ya existe.`);
      return;
    }

    this.products.push(newProduct);
  }

  getProducts() {
    console.log(this.products);
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      console.log(`No se encontró el producto con el id ${id}`);
      return;
    }

    console.log(product);
    return product;
  }
}

// TESTS
const manager = new ProductManager();
manager.addProduct("Nike Pegasus 40 SE", "Zapatillas running para hombre", "129.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685887708%2Fthumbnail_562cb1af16.webp&w=640&q=75", "NP40SE", 20);
manager.addProduct("Nike Quest 5", "Zapatillas running para hombre", "76.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685887884%2Fthumbnail_eff486a70c.webp&w=640&q=75", "NQ5", 15);
manager.addProduct("Nike Quest 5", "Zapatillas running para hombre", "76.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685887884%2Fthumbnail_eff486a70c.webp&w=640&q=75", "NQ5", 15);
manager.addProduct("Jordan Stay Loyal 2", "Zapatillas Jordan para hombre", "116.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685833073%2Fthumbnail_63c509e967.webp&w=640&q=75", "JSL2", 10);
manager.addProduct("Zoom Freak 4", "Zapatillas de básquetbol para hombre", "79.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685890611%2Fthumbnail_9ff2f47f38.webp&w=640&q=75", "ZF4", 7);
manager.addProduct("Nike Downshifter 12", "Zapatillas running para hombre", "69.99", "https://nike-clone-javier-olivares.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdlh98tbyp%2Fimage%2Fupload%2Fv1685889490%2Fthumbnail_c2aeea8970.webp&w=640&q=75", "ND12", 9);

// VISUALIZACION
manager.getProducts();

manager.getProductById(3);
