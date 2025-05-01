import {create} from "zustand"

export const useProductStore = create((set) => ({
	products: [], 
  // It is an empty array that will store all product data.
	setProducts: (products) => set({ products }), 
  //Functions for configuring all new products
	createProduct: async (newProduct) => { 
    //Receive new product information (newProduct) as parameter.
		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		} 
    //Check that the important information is complete (name, image, price)
		const res = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
     //If the information is complete, a POST HTTP request will be sent to the API endpoint "/api/products"
     // It send JSON string .
		const data = await res.json(); 
    //.json() mean convert JSON string to JavaScript object for add new data in array
    
		set((state) => ({ products: [...state.products, data.data] }));
		return { success: true, message: "Product created successfully" };
	}
}));