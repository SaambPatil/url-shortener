import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  mainUrl: {
    type: String,
    required: true,
  },
});

const Urls = mongoose.model("Url", urlSchema);
export default Urls;
