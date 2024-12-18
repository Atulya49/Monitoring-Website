import { opwprod } from "../model/opwprod.model.js";
import { opwtest } from "../model/opwtest.model.js";
export const createOpwprod = async (req, res) => {
    try {
      // Extract the data from the request body
      const {
        Date,
        Time,
        URLHit,
        MemoryinUse,
        Deadlock,
        FileServerAvailability,
        AvgResponseTime,
        WvsJobScheduler,
        WvsJobMonitorFailedJobs,
        PingTest,
        Search,
      } = req.body;
  
      // Create a new opwprod document
      const newOpwprod = new opwprod({
        Date,
        Time,
        URLHit,
        MemoryinUse,
        Deadlock,
        FileServerAvailability,
        AvgResponseTime,
        WvsJobScheduler,
        WvsJobMonitorFailedJobs,
        PingTest,
        Search,
      });
  
      // Save the new document to the database
      await newOpwprod.save();
  
      // Send a success response
      res.status(201).json({
        message: "Opwprod data successfully saved!",
        data: newOpwprod,
      });
    } catch (error) {
      // Handle errors
      console.error("Error saving opwprod data:", error);
      res.status(500).json({
        message: "Error saving data to the database.",
        error: error.message,
      });
    }
  };

  export const createOpwtest = async (req, res) => {
    try {
      // Extract data from the request body
      const {
        Date,
        Time,
        URLHit,
        MemoryinUse,
        Deadlock,
        FileServerAvailability,
        AvgResponseTime,
        WvsJobScheduler,
        WvsJobMonitorFailedJobs,
        PingTest,
        Search,
      } = req.body;
  
      // Create a new opwtest document
      const newOpwtest = new opwtest({
        Date,
        Time,
        URLHit,
        MemoryinUse,
        Deadlock,
        FileServerAvailability,
        AvgResponseTime,
        WvsJobScheduler,
        WvsJobMonitorFailedJobs,
        PingTest,
        Search,
      });
  
      // Save the new document to the database
      await newOpwtest.save();
  
      // Send a success response
      res.status(201).json({
        message: "Opwtest data successfully saved!",
        data: newOpwtest,
      });
    } catch (error) {
      // Handle errors
      console.error("Error saving opwtest data:", error);
      res.status(500).json({
        message: "Error saving data to the database.",
        error: error.message,
      });
    }
  };