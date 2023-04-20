import React, { useState } from "react";
import axios from "axios";

function DeleteCar() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setId(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .delete(`/cars/${id}`)
      .then(response => {
        setMessage(`Car with ID ${id} deleted successfully.`);
        setId("");
      })
      .catch(error => {
        console.log(error);
        setMessage("Error deleting car. Please try again.");
      });
  }

  return (
    <div>
      <h2>Delete Car</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          name="id"
          value={id}
          onChange={handleChange}
          required
        />
        <button type="submit">Delete Car</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default DeleteCar;
