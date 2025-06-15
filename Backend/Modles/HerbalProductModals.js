import mongoose from "mongoose";

const HerbalProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const HerbalProduct = mongoose.model("HerbalProduct", HerbalProductSchema);

export default HerbalProduct;
