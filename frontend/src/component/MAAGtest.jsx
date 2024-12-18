import React, { useState } from "react";
import axios from "axios";

function MAAGtest() {
  const now = new Date();
  const [formData, setFormData] = useState({
    Date: now.toLocaleDateString(),
    Time: now.toLocaleTimeString(),
    ThreeDDashboard: "",
    ThreeDSpace: "",
    ThreeDSearch: "",
    DerivedOutput: "",
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
      const response = await axios.post("https://monitoring-website.onrender.comapi/v1/maag/maagdev", formData);

      setSubmitStatus({
        loading: false,
        success: true,
        error: null,
      });

      // Optional: Reset form after successful submission
      setFormData({
        Date: now.toLocaleDateString(),
        Time: now.toLocaleTimeString(),
        ThreeDDashboard: "",
        ThreeDSpace: "",
        ThreeDSearch: "",
        DerivedOutput: "",
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
          MAAG DEV
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

        {/* ThreeD Dashboard */}
        <div className="flex flex-col">
          <label
            htmlFor="ThreeDDashboard"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            3D Dashboard
          </label>
          <input
            type="text"
            id="ThreeDDashboard"
            name="ThreeDDashboard"
            value={formData.ThreeDDashboard}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter 3D Dashboard details"
          />
        </div>

        {/* ThreeD Space */}
        <div className="flex flex-col">
          <label
            htmlFor="ThreeDSpace"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            3D Space
          </label>
          <input
            type="text"
            id="ThreeDSpace"
            name="ThreeDSpace"
            value={formData.ThreeDSpace}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter 3D space details"
          />
        </div>

        {/* ThreeD Search */}
        <div className="flex flex-col">
          <label
            htmlFor="ThreeDSearch"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            3D Search
          </label>
          <input
            type="text"
            id="ThreeDSearch"
            name="ThreeDSearch"
            value={formData.ThreeDSearch}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter 3D search details"
          />
        </div>

        {/* Derived Output */}
        <div className="flex flex-col">
          <label
            htmlFor="DerivedOutput"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Derived Output
          </label>
          <input
            type="text"
            id="DerivedOutput"
            name="DerivedOutput"
            value={formData.DerivedOutput}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter derived output details"
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

export default MAAGtest;
