export const createUser = async (user) =>{
    try{
        const response = await fetch("http://localhost:5000/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating user:", error);
        return { message: "Error creating user" };
    }
}

export const validateUser = async (user) =>{
    try{
        const response = await fetch("http://localhost:5000/api/user/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log("Data from validate user:", data)
        
        if (data.data){
            return {validity: true, user: data.data};
        } else {
            return {validity: false, user: null};
        }

    } catch (error) {
        console.error("Error validating user:", error);
        console.log("Error validating user:", error);
        return false
    }
}
