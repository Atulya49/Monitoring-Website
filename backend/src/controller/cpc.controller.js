import { cpctest } from '../model/cpctest.model.js'; 
import { cpcprod } from '../model/cpcprod.model.js';
// Controller to handle the creation of a new cpctest document
export const createCpctest = async (req, res) => {
  try {
    // Create a new document based on the data from the request body
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

    const newCpctest = new cpctest({
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
    await newCpctest.save();

    // Send a success response
    res.status(201).json({
      message: 'Data successfully saved!',
      data: newCpctest,
    });
  } catch (error) {
    // Handle any errors during the process
    console.error('Error saving cpctest data:', error);
    res.status(500).json({
      message: 'Error saving data to the database.',
      error: error.message,
    });
  }
};

export const createCpcprod = async (req, res) => {
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
  
      // Create a new document based on the cpcprod model
      const newCpcprod = new cpcprod({
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
  
      // Save the new cpcprod document to the database
      await newCpcprod.save();
  
      // Send a success response
      res.status(201).json({
        message: 'Data successfully saved!',
        data: newCpcprod,
      });
    } catch (error) {
      // Handle any errors during the process
      console.error('Error saving cpcprod data:', error);
      res.status(500).json({
        message: 'Error saving data to the database.',
        error: error.message,
      });
    }
  };
  
