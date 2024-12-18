import mongoose from "mongoose";
const maaguatSchema = new mongoose.Schema({
  Date: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  FileUpload: {
    type: String,
    required: false,
  },
  SearchOperation: {
    type: String,
    required: false,
  },
  FileDownload: {
    type: String,
    required: false,
  },
  Deletion: {
    type: String,
    required: false,
  },
  ThreeDSpace: {
    type: String,
    required: false,
  },
  ThreeDSearch: {
    type: String,
    required: false,
  },
});

export const maaguat = mongoose.model("maaguat", maaguatSchema);
