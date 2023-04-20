import React, { useState } from "react";
import axios from "axios";

function UpdateCar() {
  const [car, setCar] = useState({ id: "", make: "", model: "", year: "" });
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setCar(prevValue => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`/cars/${car.id}`, car)
      .then(response => {
        setMessage("Car updated successfully.");
        setCar({ id: "", make: "", model: "", year: "" });
      })
      .catch(error => {
        console.log(error);
        setMessage("Error updating car. Please try again.");
      });
  }

  return (
    <div>
      <h2>Update Car Details</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          name="id"
          value={car.id}
          onChange={handleChange}
          required
        />
        <label htmlFor="make">Make:</label>
        <input
          type="text"
          name="make"
          value={car.make}
          onChange={handleChange}
          required
        />
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
          required
        />
        <label htmlFor="year">Year:</label>
        <input
          type="text"
          name="year"
          value={car.year}
          onChange={handleChange}
          required
        />
        <button type="submit">Update Car</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default UpdateCar;
