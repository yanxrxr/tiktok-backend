import mongoose from "mongoose";

const tiktokSchema = new mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: Number,
  comments: Number,
  shares: Number,
});

export default mongoose.model("Videos", tiktokSchema);
