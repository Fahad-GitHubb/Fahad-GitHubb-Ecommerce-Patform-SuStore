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
  let productIds = []
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


      if (!productResponse.ok) {
        throw new Error("Failed to create product");
      }

      const productData = await productResponse.json();
      console.log("Product created:", productData);
      return productData.data;
    });

    productIds = await Promise.all(productPromises);
    console.log("All products created successfully");

    // return { store: storeId, message: "Products created successfully" };
  } catch (error) {
    console.error("Error creating products:", error);
    return { message: "Error creating products", error };
  }

  console.log("Product IDs:", productIds);
  let bundles = storeData['bundles'];
  console.log("Bundles", bundles);

  // remove the id property from each bundle and add storeId
  bundles = bundles.map(bundle => {
    const updatedBundle = {
      ...bundle,
      storeId: storeId,
    };
    delete updatedBundle.id; // Remove the id property
    return updatedBundle;
  });

  console.log("Bundles to create:", bundles);
  // seperate products from bundles and keep them in seperate array 
  let bundleItems = bundles.map(bundle => {
    const items = bundle.products.map(item => {
      return {
        productId: item.productId,
        quantity: item.quantity,
      };
    });
    return {
      items: items,
    };
  });
  console.log("Bundle Items", bundleItems);

  bundles = bundles.map((bundle, index) => {
    delete bundle.products; // Remove the products property from the bundle
    return {
      ...bundle
    };
  });

  console.log(bundles)

  let bundleIds = []

  //first create the bundles 
  try {
    const bundlePromises = bundles.map(async (bundle) => {
      const bundleResponse = await fetch("http://localhost:5000/api/bundle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bundle),
      });

      if (!bundleResponse.ok) {
        throw new Error("Failed to create bundle");
      }

      const bundleData = await bundleResponse.json();
      console.log("Bundle created:", bundleData.data);
      return bundleData.data;
    });

    bundleIds = await Promise.all(bundlePromises);
    console.log("All bundles created successfully", bundleIds);

    //return { store: storeId, message: "Bundles created successfully" };
  } catch (error) {
    console.error("Error creating bundles:", error);
    return { message: "Error creating bundles", error };
  }

  // create the bundle items
  bundleItems = bundleItems.map((bundle, index) =>{
    const items = bundle.items.map(item => {
      return {
        productId: item.productId,
        quantity: item.quantity,
        bundleId: bundleIds[index]
      };
    });
    return {
      items: items,
    };  

  })

  console.log("Bundle Items to create:", bundleItems);

  // let us create the bundles item now
  try {
    const bundleItemPromises = bundleItems.map(async (bundle) => {
      const bundleItemPromise = bundle.items.map(async (item) => {
        const bundleItemResponse = await fetch("http://localhost:5000/api/bundleItem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });
  
        if (!bundleItemResponse.ok) {
          throw new Error("Failed to create bundle item");
        }
  
        const bundleItemData = await bundleItemResponse.json();
        console.log("Bundle item created:", bundleItemData);
        return bundleItemData;
      });
      return Promise.all(bundleItemPromise); // Ensure promises are resolved for each bundle
    });
  
    // Await all bundle item promises
    await Promise.all(bundleItemPromises);
    console.log("All bundle items created successfully");
  } catch (error) {
    console.error("Error creating bundle items:", error);
    return { message: "Error creating bundle items", error };
  }
}


