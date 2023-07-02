import express, { Router } from "express"
import Product from "../models/product.js"
const router = Router()


// fetch all products from database
router.get("/getproducts", async (req, res) => {
    try {
        const data = await Product.find()
        res.status(200).json(data)
    }
    catch (err) {
        res.status(404).json({ err: "something went to wrong" })
    }

})

// add products in database 
router.post("/addproducts", async (req, res) => {
    try {
        const { title, slug, desc, img, category, size, color, price, availableQty } = req.body
        const data = new Product({ title, slug, desc, img, category, size, color, price, availableQty })
        const result = await data.save()
        res.status(200).json(result)
    }
    catch (err) {
        res.status(404).json({ err: "something went to wrong" })
    }

})

// fetch a product using slug
router.get("/getproduct/:slug", async (req, res) => {
    try {
        const slug = req.params.slug

        const data = await Product.find({slug});
        res.status(200).json(data)
    }
    catch (err) {
        res.status(404).json({ err: "something went to wrong" })
    }   
})

// update a product using id    
router.put("/updateproduct/:id", async (req, res) => {
    try {
        const  query = req.body
        let product = await Product.findById(req.params.id);

        if(!product){
            return "not found"
        }

        product = await Product.findByIdAndUpdate(req.params.id,{$set:query},{new:true})


        res.status(200).json(product)
    }
    catch (err) {
        res.status(404).json({ err: "something went to wrong" })
    }   
})

// delete product
router.delete("/deleteproduct/:id",async(req,res)=>{
    try{
        let data= await Product.findByIdAndDelete(req.params.id)
        if (!data) {
            return "Not found";
          }

        res.status(200).json(data)
    }
    catch(err){
        res.status(404).json({ err: "something went to wrong" })
    }
})

export default router