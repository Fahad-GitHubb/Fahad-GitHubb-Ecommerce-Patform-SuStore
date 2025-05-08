export const createProduct = async (store) => {
    try {
        const response = await fetch("http://localhost:5000/api/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(store),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating product:", error);
        return { message: "Error creating product" };
    }
}