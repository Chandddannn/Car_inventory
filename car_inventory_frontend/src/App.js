import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import UpdateCar from './components/UpdateCar';
import DeleteCar from './components/DeleteCar';
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/update-car" element={<UpdateCar />} />
            <Route path="/delete-car" element={<DeleteCar />} />
          </Routes>
        </div>
      </Router>
      <CarList />
    </div>
  );
}

export default App;
