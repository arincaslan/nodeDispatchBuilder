import express from "express";
const router = express.Router();

router.get("/deneme", (req, res) => {
    res.status(200).json({status: "OKAY"})
})

router.post("/postdeneme", (req, res) => {
    const { name } = req.body;
    res.status(200).json({name})
})

export default router;