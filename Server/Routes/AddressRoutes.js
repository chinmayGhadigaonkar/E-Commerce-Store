import { Router } from "express";
import { authMiddleware } from "../Midware/authMiddleware.js";
import Address from "../models/address.js";

const AddressRoutes = Router();

AddressRoutes.get("/getAddress", authMiddleware, async (req, res) => {
  try {
    const _id = req.user._id;

    const address = await Address.find({ user: _id });

    res.status(200).json({ success: true, address: address });
  } catch (error) {
    res.status(400).json({ success: false, err: error });
  }
});

AddressRoutes.post("/addAddress", authMiddleware, async (req, res) => {
  try {
    const _id = req.user._id;
    const { address, city, state, country, pinCode, phoneNo } = req.body;

    const data = await Address.create({
      address,
      city,
      state,
      country,
      pinCode,
      phoneNo,
      user: _id,
    });

    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

AddressRoutes.delete("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Address.findByIdAndDelete(id);

    res
      .status(201)
      .json({ success: true, msg: "delete Address successfully", result });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

export default AddressRoutes;
