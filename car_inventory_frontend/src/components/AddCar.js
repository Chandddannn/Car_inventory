import React, { useState } from 'react';
import axios from 'axios';

const AddCarForm = () => {
  const [newCar, setNewCar] = useState({
    make: '',
    model: '',
    year: '',
    color: '',
  });

  const handleChange = (e) => {
    setNewCar({ ...newCar, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/cars', newCar)
      .then((res) => {
        console.log(res.data);
        setNewCar({
          make: '',
          model: '',
          year: '',
          color: '',
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full border-black border-2 w-1/2 mx-auto p-6 m-20 bg-[#0A4D68] text-white ">
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="make" className="block p-4 text-black bg-[#7fffd4] border-2 border-black  mb-2">
            Make:
          </label>
          <input
            type="text"
            id="make"
            name="make"
            value={newCar.make}
            onChange={handleChange}
            className=" border  w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="model" className="block p-4 text-black bg-[#7fffd4] border-2 border-black  mb-2">
            Model:
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={newCar.model}
            onChange={handleChange}
            className="border  w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label htmlFor="year" className="block p-4 text-black bg-[#7fffd4] border-2 border-black mb-2">
            Year:
          </label>
          <input
            type="text"
            id="year"
            name="year"
            value={newCar.year}
            onChange={handleChange}
            className="border  w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label htmlFor="color" className="block p-4 text-black bg-[#7fffd4] border-2 border-black  mb-2">
            Color:
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={newCar.color}
            onChange={handleChange}
            className="border w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#0A4D68] border-black border-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          Add Car
        </button>
      </div>
    </form>
  );
};

export default AddCarForm;
