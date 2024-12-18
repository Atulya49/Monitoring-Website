import React, { useState } from "react";
import axios from "axios";

function DFRprod() {
  const now = new Date();
  const [formData, setFormData] = useState({
    Date: now.toLocaleDateString(),
    Time: now.toLocaleTimeString(),
    URLHit: "No", // Default to "No"
    MemoryinUse: "",
    Deadlock: "No", // Default to "No"
    FileServerAvailability: "",
    AvgResponseTime: "",
    WvsJobScheduler: "",
    WvsJobMonitorFailedJobs: "",
    PingTest: "",
    Search: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: false, error: null });

    try {
      const response = await axios.post(
        "https://monitoring-website.onrender.com/api/v1/cpc/cpcprod", // Update with your actual API endpoint
        formData
      );

      setSubmitStatus({
        loading: false,
        success: true,
        error: null,
      });

      // Optional: Reset form after successful submission
      setFormData({
        Date: now.toLocaleDateString(),
        Time: now.toLocaleTimeString(),
        URLHit: "No", // Reset to "No"
        MemoryinUse: "",
        Deadlock: "No", // Reset to "No"
        FileServerAvailability: "",
        AvgResponseTime: "",
        WvsJobScheduler: "",
        WvsJobMonitorFailedJobs: "",
        PingTest: "",
        Search: "",
      });
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: false,
        error: "Submission failed. Please try again.",
      });
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          CPC Production
        </h2>

        {/* Date */}
        <div className="flex flex-col">
          <label
            htmlFor="Date"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Date
          </label>
          <input
            type="text"
            id="Date"
            name="Date"
            value={formData.Date}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col">
          <label
            htmlFor="Time"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Time
          </label>
          <input
            type="text"
            id="Time"
            name="Time"
            value={formData.Time}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* URL Hit (Yes/No) */}
        <div className="flex flex-col">
          <label
            htmlFor="URLHit"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            URL Hit
          </label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="URLHitYes"
                name="URLHit"
                value="Yes"
                checked={formData.URLHit === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="URLHitYes" className="text-sm">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="URLHitNo"
                name="URLHit"
                value="No"
                checked={formData.URLHit === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="URLHitNo" className="text-sm">No</label>
            </div>
          </div>
        </div>

        {/* Memory in Use */}
        <div className="flex flex-col">
          <label
            htmlFor="MemoryinUse"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Memory in Use
          </label>
          <input
            type="text"
            id="MemoryinUse"
            name="MemoryinUse"
            value={formData.MemoryinUse}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter memory in use"
          />
        </div>

        {/* Deadlock (Yes/No) */}
        <div className="flex flex-col">
          <label
            htmlFor="Deadlock"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Deadlock
          </label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="DeadlockYes"
                name="Deadlock"
                value="Yes"
                checked={formData.Deadlock === "Yes"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="DeadlockYes" className="text-sm">Yes</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="DeadlockNo"
                name="Deadlock"
                value="No"
                checked={formData.Deadlock === "No"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="DeadlockNo" className="text-sm">No</label>
            </div>
          </div>
        </div>

        {/* File Server Availability */}
        <div className="flex flex-col">
          <label
            htmlFor="FileServerAvailability"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            File Server Availability
          </label>
          <input
            type="text"
            id="FileServerAvailability"
            name="FileServerAvailability"
            value={formData.FileServerAvailability}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter file server availability"
          />
        </div>

        {/* Average Response Time */}
        <div className="flex flex-col">
          <label
            htmlFor="AvgResponseTime"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Average Response Time
          </label>
          <input
            type="text"
            id="AvgResponseTime"
            name="AvgResponseTime"
            value={formData.AvgResponseTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter average response time"
          />
        </div>

        {/* Wvs Job Scheduler */}
        <div className="flex flex-col">
          <label
            htmlFor="WvsJobScheduler"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Wvs Job Scheduler
          </label>
          <input
            type="text"
            id="WvsJobScheduler"
            name="WvsJobScheduler"
            value={formData.WvsJobScheduler}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Wvs job scheduler info"
          />
        </div>

        {/* Wvs Job Monitor Failed Jobs */}
        <div className="flex flex-col">
          <label
            htmlFor="WvsJobMonitorFailedJobs"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Wvs Job Monitor Failed Jobs
          </label>
          <input
            type="text"
            id="WvsJobMonitorFailedJobs"
            name="WvsJobMonitorFailedJobs"
            value={formData.WvsJobMonitorFailedJobs}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter failed job details"
          />
        </div>

        {/* Ping Test */}
        <div className="flex flex-col">
          <label
            htmlFor="PingTest"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Ping Test
          </label>
          <input
            type="text"
            id="PingTest"
            name="PingTest"
            value={formData.PingTest}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter ping test results"
          />
        </div>

        {/* Search */}
        <div className="flex flex-col">
          <label
            htmlFor="Search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Search
          </label>
          <input
            type="text"
            id="Search"
            name="Search"
            value={formData.Search}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter search results"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={submitStatus.loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {submitStatus.loading ? "Submitting..." : "Submit Form"}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus.success && (
          <div className="w-full text-center text-green-600 mt-4">
            Form submitted successfully!
          </div>
        )}
        {submitStatus.error && (
          <div className="w-full text-center text-red-600 mt-4">
            {submitStatus.error}
          </div>
        )}
      </form>
    </div>
  );
}

export default DFRprod;
