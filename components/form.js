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
    window.open(
      "mailto:m.j.de.krosse@o2g2.nl?subject=Email%20van%20" +
        formData.name +
        "&body=" +
        formData.message +
        "%0D%0AIk zou graag antwoord willen via: " +
        formData.email
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2" htmlFor="name">
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
        <label className="block text-white font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="border border-white p-2 rounded-lg w-full"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white font-medium mb-2" htmlFor="message">
          Bericht
        </label>
        <textarea
          className="border border-white p-2 rounded-lg w-full max-h-50"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button className="bg-vera-blue text-white p-2 rounded-lg hover:bg-vera-orange">
        Versturen
      </button>
    </form>
  );
}
