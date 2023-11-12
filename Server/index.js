import env from "dotenv";
import express from "express";
import connection from "./connection.js";
import routes from "./Routes/productroutes.js";
import router from "./Routes/authroutes.js";
import orouter from "./Routes/ordrerRoutes.js";
import cartrouter from "./Routes/cartRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import Product from "./models/product.js";
import filter from "./Routes/filterRoutes.js";
import wishlist from "./Routes/wishlistRoute.js";
import { v2 as cloudinary } from "cloudinary";
import uploadImg from "./utills/Cloudinary.js";
import AddressRoutes from "./Routes/AddressRoutes.js";

env.config();
const app = express();
const port = 8000;

// cors
const corsOptions = {
  origin: ["http://localhost:5173", "*"],
  credentials: true, //access-control-allow-credentials:true
};

//  Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.CLOUDINARY_SECRETE_KEY,
});

// uploadImg()

app.use(cors(corsOptions));
// connection to db
connection();

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/products", routes);
app.use("/auth", router);
app.use("/order", orouter);
app.use("/cart", cartrouter);
app.use("/filter", filter);
app.use("/wishlist", wishlist);
app.use("/address", AddressRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, (req, res) => {
  console.log(`app is listen in ${port}`);
});
