import React from "react";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission here
    console.log(formData);
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-lg font-medium mb-4">Contact Us</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Naam
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="message"
        >
          Bericht
        </label>
        <textarea
          className="border border-gray-400 p-2 rounded-lg w-full"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button className="bg-vera-blue text-white p-2 rounded-lg hover:bg-sky-600">
        Submit
      </button>
    </form>
  );
}
