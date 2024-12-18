import mongoose from "mongoose";

const maagdevSchema= new mongoose.Schema({
  Date: { type: String, required: true },
  Time: { type: String, required: true },
  ThreeDDashboard: { type: String, required: false },
  ThreeDSpace: { type: String, required: false },
  ThreeDSearch: { type: String, required: false },
  DerivedOutput: { type: String, required: false },
});

export const maagdev = mongoose.model('maagdev', maagdevSchema);

