import express, { Request, Response } from 'express';
import NFTController from '../controllers/NFTController';
const router = express.Router();

const nftController = new NFTController();

router.get("/health", nftController.health)
router.post("/addNFT", nftController.addNFT);


export default router;