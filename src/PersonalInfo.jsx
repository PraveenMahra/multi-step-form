import { createBrowserHistory } from "history";
import { useState } from "react";

function PersonalInfo() {
  const history = createBrowserHistory();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const requiredFields = ["name", "email", "phone"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.phone && !isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Simple phone number validation regex (allowing only digits and spaces)
    const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleNextClick = (e) => {
    if (validateForm()) {
      // Proceed to the next page
      history.push("/select-plan");
    } else {
      e.preventDefault();
    }
  };

  const getInputBorderColor = (fieldName) => {
    return errors[fieldName] ? "#9e5b64" : "";
  };

  return (
    <div className="ml-80 w-[48rem]">
      <div>
        <h2 className="text-[#011b3b] text-[3.2rem] font-bold tracking-wide">
          Personal info
        </h2>
        <p className="text-[#8f8f97] tracking-wide mb-[3rem]">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="flex flex-col ">
        <label className="relative" htmlFor="name">
          Name
          {errors.name && (
            <p className="text-[#cb404e] text-[1.4rem] font-bold absolute right-0 top-0">
              {errors.name}
            </p>
          )}
        </label>

        <input
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="e.g. Narendra Modi"
          value={formData.name}
          onChange={handleInputChange}
          style={{ borderColor: getInputBorderColor("name") }}
        />

        <label className="relative" htmlFor="email">
          Email Address
          {errors.email && (
            <p className="text-[#cb404e] text-[1.4rem] font-bold absolute right-0 top-0">
              {errors.email}
            </p>
          )}
        </label>

        <input
          className="input"
          type="email"
          id="email"
          name="email"
          placeholder="e.g. modi@gmail.com"
          value={formData.email}
          onChange={handleInputChange}
          style={{ borderColor: getInputBorderColor("email") }}
        />

        <label className="relative" htmlFor="phone">
          Phone Number
          {errors.phone && (
            <p className="text-[#cb404e] text-[1.4rem] font-bold absolute right-0 top-0">
              {errors.phone}
            </p>
          )}
        </label>

        <input
          className="input"
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. +9198765432"
          value={formData.phone}
          onChange={handleInputChange}
          style={{ borderColor: getInputBorderColor("phone") }}
        />

        <div className="flex justify-end mt-[5rem]">
          <button onClick={handleNextClick} className="button-primary">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalInfo;
