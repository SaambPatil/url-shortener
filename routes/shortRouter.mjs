import express from "express";

const router = express.Router();

import { generateShortURL ,openByShortURL} from "../controllers/shortControllers.mjs";
router.post("/", generateShortURL);
router.get("/:shortUrl", openByShortURL);

export default router;
