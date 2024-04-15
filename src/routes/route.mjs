import express from 'express';
import {addBook, searchBook} from "../controllers/controller.mjs";

const router = express.Router();
router.post("/addBook", addBook);
router.patch("/searchBook", searchBook);

export default router;