export const getStores = async () =>{
    try{
        const response = await fetch("http://localhost:5000/api/store", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error getting stores:", error);
        return { message: "Error getting stores" };
    }
}

export const createStore = async (store, products) => {
  console.log("store", store);
  console.log("products", products);

  let storeId;

  // Step 1: Create Store
  try {
    const storeResponse = await fetch("http://localhost:5000/api/store", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(store),
    });

    if (!storeResponse.ok) {
      throw new Error("Failed to create store");
    }

    const storeData = await storeResponse.json();
    storeId = storeData._id;
    console.log("Store created with ID:", storeId);
  } catch (error) {
    console.error("Error creating store:", error);
    return { message: "Error creating store", error };
  }

  // Step 2: Create Products (if any)
  if (products.length > 0) {
    const productsWithStoreId = products.map(product => ({
      ...product,
      storeId,
    }));

    try {
      const productResponse = await fetch("http://localhost:5000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productsWithStoreId),
      });

      if (!productResponse.ok) {
        throw new Error("Failed to create products");
      }

      const productData = await productResponse.json();
      console.log("Products created:", productData);
      return { store: storeId, products: productData };
    } catch (error) {
      console.error("Error creating products:", error);
      return { message: "Error creating products", error };
    }
  }

  return { store: storeId, message: "Store created successfully without products" };
};
