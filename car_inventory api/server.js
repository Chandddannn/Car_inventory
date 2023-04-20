const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

let cars = [];

// Read the contents of the cars.json file and parse it into an array of car objects
fs.readFile('cars.json', (err, data) => {
  if (err) {
    console.error('Error reading cars.json:', err);
  } else {
    cars = JSON.parse(data);
    console.log('Loaded cars from cars.json:', cars);
  }
});

const cors = require('cors');
app.use(cors());


app.use(express.json());

// GET /cars - retrieve all cars
app.get('/cars', (req, res) => {
  res.json(cars);
});

// GET /cars/:id - retrieve a single car by id
app.get('/cars/:id', (req, res) => {
  const id = req.params.id;
  const car = cars.find(car => car.id === id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).send('Car not found');
  }
});

// POST /cars - add a new car
app.post('/cars', (req, res) => {
  const newCar = req.body;
  cars.push(newCar);
  fs.writeFile('cars.json', JSON.stringify(cars), err => {
    if (err) {
      console.error('Error writing cars.json:', err);
      res.status(500).send('Error saving car to file');
    } else {
      console.log('Added new car:', newCar);
      res.json(newCar);
    }
  });
});

// PUT /cars/:id - update an existing car by id
app.put('/cars/:id', (req, res) => {
  const id = req.params.id;
  const updatedCar = req.body;
  const index = cars.findIndex(car => car.id === id);
  if (index !== -1) {
    cars[index] = updatedCar;
    fs.writeFile('cars.json', JSON.stringify(cars), err => {
      if (err) {
        console.error('Error writing cars.json:', err);
        res.status(500).send('Error saving car to file');
      } else {
        console.log('Updated car with id', id, 'to', updatedCar);
        res.json(updatedCar);
      }
    });
  } else {
    res.status(404).send('Car not found');
  }
});

// DELETE /cars/:id - delete a car by id
app.delete('/cars/:id', (req, res) => {
  const id = req.params.id;
  const index = cars.findIndex(car => car.id === id);
  if (index !== -1) {
    const deletedCar = cars.splice(index, 1)[0];
    fs.writeFile('cars.json', JSON.stringify(cars), err => {
      if (err) {
        console.error('Error writing cars.json:', err);
        res.status(500).send('Error saving car to file');
      } else {
        console.log('Deleted car with id', id);
        res.json(deletedCar);
      }
    });
  } else {
    res.status(404).send('Car not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
