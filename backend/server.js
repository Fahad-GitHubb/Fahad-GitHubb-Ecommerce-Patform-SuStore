import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';

import Product from './models/products.model.js';
import Users from './models/users.models.js';
import Stores from './models/stores.model.js';
import AdvertismentSchema from './models/advertisments.model.js';
import BundleItems from './models/bundleItems.model.js';
import Bundles from './models/bundles.model.js';
import Carts from './models/carts.model.js';
import CartItems from './models/cartItems.model.js';
import Categories from './models/categories.model.js';
import DiscountCoupons from './models/discountCoupons.model.js';
import Faqs from './models/faqs.model.js';
import Habits from './models/habits.model.js';
import Notifications from './models/notifications.model.js';
import Orders from './models/orders.model.js';
import Products from './models/products.model.js';
import Reviews from './models/reviews.model.js';
import Transactions from './models/transactions.model.js';
import UserFourms from './models/userFourms.model.js';
import WishlistItems from './models/wishlistItems.model.js';
import Wishlists from './models/wishlists.model.js';


dotenv.config();


const app = express();
app.use(cors());
app.use(express.json()) // Middleware to parse JSON data from incoming requests (req.body)


// creating a new user
app.post('/api/user', async (req, res)=>{
    const user = req.body;

    if(!user.name || !user.email || !user.password){
        return res.status(400).json({message: "Please fill all the fields of user"})
    }

    const newUser = new Users(user)

    try{
        await newUser.save()
        res.status(200).json({message: "User has been created successfully"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

// validate a user
app.post('/api/user/validate', async (req, res)=>{
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({message: "Please fill all the fields of user"})
    }

    try{
        const user = await Users.findOne({email, password})
        if(user){
            res.status(200).json({message: "User has been validated successfully", data: user})
        } else {
            res.status(400).json({message: "Invalid email or password"})
        }
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

// get store details
app.get('/api/store', async (req, res)=>{
    try{
        const store = await Stores.findOne({role: "store"})
        res.status(200).json({seccess: true, data: store})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})


// creating new prodcut 
app.post('/api/product', async (req, res)=>{
    const product = req.body;
    console.log(product)

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: "Please fill all the fields of product"})
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save()
        res.status(200).json({message: "Product has been created successfully"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

// deleting a product
app.delete('/api/product/:id', async (req, res)=>{
    const {id} = req.params
    console.log(id)

    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({message: "Product has been deleted successfully"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

//geting all products
app.get('/api/products', async (req,res)=>{
    try{
        const products = await Product.find({})
        res.status(200).json({seccess: true, data: products})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

app.put('/api/product/:id', async (req, res)=>{
    const {id} = req.params
    const product = req.body

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
        res.status(200).json({message: "Product has been updated successfully", data: updatedProduct})
    } catch(error){
        res.status(500).json({message: error.message})
    }
})

// get all stores
app.get('/api/store', async(req, res) =>{
    try {
        const stores = await Stores.find({})
        res.status(200).json({success: true, data: stores})

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// create a store
app.post('api/store', async (req, res) => {
    const store = req.body

    if(!store.name || !store.email || !store.password){
        return res.status(400).json({message: "Please fill all the fields of store"})
    }

    const newStore = new Stores(store)

    try{
        await newStore.save()
        res.status(200).json({message: "Store has been created successfully", data: newStore})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})

//create a product
app.post('/api/product', async (req, res) => {
    const product = req.body

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({message: "Please fill all the fields of product"})
    }

    const newProduct = new Product(product)

    try{
        await newProduct.save()
        res.status(200).json({message: "Product has been created successfully"})
    } catch (error){
        res.status(500).json({message: error.message})
    }
})








app.listen(5000, ()=>{
    connectDB()
    console.log(process.env.MONGO_URI)
})