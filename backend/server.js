import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js';
import Product from './models/products.model.js';

dotenv.config();

const app = express();
app.use(express.json()) // Middleware to parse JSON data from incoming requests (req.body)

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

app.listen(5000, ()=>{
    connectDB()
    console.log(process.env.MONGO_URI)
})