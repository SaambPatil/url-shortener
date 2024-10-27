import Urls from "../model/urlData.mjs";
import { nanoid } from "nanoid";

export const generateShortURL = async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }
    const shortID = nanoid(10);
    const newID = await Urls.create({ shortUrl: shortID, mainUrl: url });
    res.status(200).json(newID);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const openByShortURL = async (req, res) => {
  try {
    const shortID = req.params.shortUrl;
    const urlEntry = await Urls.findOne({ shortUrl: shortID });
    if (urlEntry) {
      return res.status(200).json({ mainUrl: urlEntry.mainUrl });
    } else {
      return res.status(404).json({ error: "Short URL not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

