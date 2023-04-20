import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'
import '../index.css'

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/cars')
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/cars/${id}`)
      .then((response) => {
        setCars(cars.filter((car) => car.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="title p-4">
      <h1 className="text-[60px] font-bold mb-4 text-center">Car List</h1>
      <ul className='car-data flex justify-start flex-wrap'>
        {cars.map((car) => (
          <div className='one-data'>
          <li key={car.id}>{car.make} </li>
          <li key={car.id}> {car.model} </li>
          <li key={car.id}>{car.year} </li>
          <li key={car.id}>{car.color} </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CarList;