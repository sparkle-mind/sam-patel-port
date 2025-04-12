import "./contact.css";
import React, { useState } from "react";
export default function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);
      // ✅ Submit to API or reset
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setErrors({});
    }
  };

  return (
    <>
       <div className="form-container">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Enter Your Message</label>
          <textarea
            name="message"
            id="textarea"
            rows="10"
            cols="50"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="button form-submit-button"
        >
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">Submit</span>
          </span>
        </button>
      </form>
    </div>
    </>
  );
}
