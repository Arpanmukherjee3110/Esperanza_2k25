"use client"
import { FormEvent, useState } from "react";

const ContactUsForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!formData.name || !formData.email || !formData.message) {
        setErrorMessage("All fields are required.");
        return;
      }
      setErrorMessage("");
      console.log("Form submitted", formData);
    };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-lg font-medium mb-2">Name</label>
        <input
          type="text"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Email</label>
        <input
          type="email"
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Message</label>
        <textarea
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        ></textarea>
      </div>
      {errorMessage && <p className="text-red-500 text-lg">{errorMessage}</p>}
      <button
        type="submit"
        className="w-full cursor-pointer p-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold text-white text-lg transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactUsForm;
