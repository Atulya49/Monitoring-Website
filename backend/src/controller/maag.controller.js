import { maaguat } from "../model/maaguat.model.js";
import { maagdev } from "../model/maagdev.model.js";
export const createMaaguat = async (req, res) => {
  try {
    // Extract the data from the request body
    const {
      Date,
      Time,
      FileUpload,
      SearchOperation,
      FileDownload,
      Deletion,
      ThreeDSpace,
      ThreeDSearch,
    } = req.body;

    // Create a new maaguat document
    const newMaaguat = new maaguat({
      Date,
      Time,
      FileUpload,
      SearchOperation,
      FileDownload,
      Deletion,
      ThreeDSpace,
      ThreeDSearch,
    });

    // Save the new document to the database
    await newMaaguat.save();

    // Send a success response
    res.status(201).json({
      message: "Data successfully saved!",
      data: newMaaguat,
    });
  } catch (error) {
    // Handle errors
    console.error("Error saving maaguat data:", error);
    res.status(500).json({
      message: "Error saving data to the database.",
      error: error.message,
    });
  }
};

export const createMaagdev = async (req, res) => {
  try {
    // Extract the data from the request body
    const {
      Date,
      Time,
      ThreeDDashboard,
      ThreeDSpace,
      ThreeDSearch,
      DerivedOutput,
    } = req.body;

    // Create a new maagdev document
    const newMaagdev = new maagdev({
      Date,
      Time,
      ThreeDDashboard,
      ThreeDSpace,
      ThreeDSearch,
      DerivedOutput,
    });

    // Save the new document to the database
    await newMaagdev.save();

    // Send a success response
    res.status(201).json({
      message: "Maagdev data successfully saved!",
      data: newMaagdev,
    });
  } catch (error) {
    // Handle errors
    console.error("Error saving maagdev data:", error);
    res.status(500).json({
      message: "Error saving data to the database.",
      error: error.message,
    });
  }
};
