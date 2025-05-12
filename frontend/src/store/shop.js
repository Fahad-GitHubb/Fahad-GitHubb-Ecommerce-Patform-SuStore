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



export const createStore = async (storeData, sellerID) => {
  console.log("storeData", storeData);
  
  // let store = storeData.shop
  // store = { ...store, sellerId: sellerID };
  // store= { ...store, image: store.image.name}
  // console.log("store", store);

  // let storeId

  // // Step 1: Create Store
  // try {
  //   const storeResponse = await fetch("http://localhost:5000/api/store", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(store),
  //   });

  //   if (!storeResponse.ok) {
  //     throw new Error("Failed to create store");
  //   }

  //   const storeData = await storeResponse.json();
  //   console.log("Store created:", storeData);
  //   storeId = storeData.data
  //   console.log("Store created with ID:", storeId);
  // } catch (error) {
  //   console.error("Error creating store:", error);
  //   return { message: "Error creating store", error };
  // }

  let storeId = '681e7377d10c681dd9de412b'
  // // Step 2: Create Products (if any)
  let products = storeData['products'];
  for (let i = 0; i < products.length; i++) {
    products[i] = { ...products[i], storeId: storeId };
  }
  console.log("Products", products);
  // Convert product images to an array of strings and remove the id property
  products = products.map(product => {
    const updatedProduct = {
      ...product,
      images: product.images.map(image => image.name), // Convert images to an array of strings
    };
    delete updatedProduct.id; // Remove the id property
    return updatedProduct;
  });


  console.log("Products to create:", products);

  
  try {
    const productPromises = products.map(async (product) => {
      const productResponse = await fetch("http://localhost:5000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      console.log(productResponse);

      if (!productResponse.ok) {
        throw new Error("Failed to create product");
      }

      const productData = await productResponse.json();
      console.log("Product created:", productData);
      return productData;
    });

    await Promise.all(productPromises);
    console.log("All products created successfully");

    return { store: storeId, message: "Products created successfully" };
  } catch (error) {
    console.error("Error creating products:", error);
    return { message: "Error creating products", error };
  }
};
``