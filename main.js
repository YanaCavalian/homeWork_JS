class ProductsService {
  static async getRequest(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static async postRequest(url, data) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async putRequest(url, data) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async deleteRequest(url) {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  static async getProductList() {
    const url = 'https://dummyjson.com/products';
    return this.getRequest(url);
  }

  static async getProductById(productId) {
    const url = `https://dummyjson.com/products/${productId}`;
    return this.getRequest(url);
  }

  static async searchProducts(query) {
    const url = `https://dummyjson.com/products/search?q=${query}`;
    return this.getRequest(url);
  }

  static async getProductsWithOptions(limit, skip, select) {
    const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${select}`;
    return this.getRequest(url);
  }

  static async getProductCategories() {
    const url = 'https://dummyjson.com/products/categories';
    return this.getRequest(url);
  }

  static async getProductsByCategory(category) {
    const url = `https://dummyjson.com/products/category/${category}`;
    return this.getRequest(url);
  }

  static async addProduct(data) {
    const url = 'https://dummyjson.com/products/add';
    return this.postRequest(url, data);
  }

  static async updateProduct(productId, data) {
    const url = `https://dummyjson.com/products/${productId}`;
    return this.putRequest(url, data);
  }

  static async deleteProduct(productId) {
    const url = `https://dummyjson.com/products/delete/${productId}`;
    return this.deleteRequest(url);
  }
}

async function main() {
  try {
    const productList = await ProductsService.getProductList();
    console.log('Product List:');
    console.log(productList);
    await ProductsService.delay(1000);

    const productById = await ProductsService.getProductById(1);
    console.log('Product by ID:');
    console.log(productById);
    await ProductsService.delay(1000);

    const searchResults = await ProductsService.searchProducts('phone');
    console.log('Search Results:');
    console.log(searchResults);
    await ProductsService.delay(1000);

    const productsWithOptions = await ProductsService.getProductsWithOptions(10, 0, 'title,price');
    console.log('Products with Options:');
    console.log(productsWithOptions);
    await ProductsService.delay(1000);

    const productCategories = await ProductsService.getProductCategories();
    console.log('Product Categories:');
    console.log(productCategories);
    await ProductsService.delay(1000);

    const productsByCategory = await ProductsService.getProductsByCategory('smartphones');
    console.log('Products by Category:');
    console.log(productsByCategory);
    await ProductsService.delay(1000);

    const newProduct = {
      title: ' Pencil',
    };
    const addedProduct = await ProductsService.addProduct(newProduct);
    console.log('Added Product:');
    console.log(addedProduct);
    await ProductsService.delay(1000);

    const updatedProduct = {
      title: 'iPhone Galaxy +1',
    };
    const updatedProductResult = await ProductsService.updateProduct(1, updatedProduct);
    console.log('Updated Product:');
    console.log(updatedProductResult);
    await ProductsService.delay(1000);

    const deletedProductResult = await ProductsService.deleteProduct(1);
    console.log('Deleted Product:');
    console.log(deletedProductResult);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
