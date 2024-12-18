import mongoose from "mongoose";

const opwtestSchema = new mongoose.Schema({
  Date: {
    type: String,
    required: true,
  },
  Time: {
    type: String,
    required: true,
  },
  URLHit: {
    type: String,
    enum: ["Yes", "No"], // Ensures the value is either 'Yes' or 'No'
    default: "No",
  },
  MemoryinUse: {
    type: String,
    required: true,
  },
  Deadlock: {
    type: String,
    enum: ["Yes", "No"], // Ensures the value is either 'Yes' or 'No'
    default: "No",
  },
  FileServerAvailability: {
    type: String,
    required: true,
  },
  AvgResponseTime: {
    type: String,
    required: true,
  },
  WvsJobScheduler: {
    type: String,
    required: true,
  },
  WvsJobMonitorFailedJobs: {
    type: String,
    required: true,
  },
  PingTest: {
    type: String,
    required: true,
  },
  Search: {
    type: String,
    required: true,
  },
});

export const opwtest = mongoose.model("opwtest", opwtestSchema);
