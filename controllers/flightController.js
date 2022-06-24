const { Flights } = require("../models/Flight");
const { v4: uuid } = require("uuid");

// get all flights
exports.getFlights = async (req, res) => {
  try {
    const flights = Flights;
    res.status(200).json({
      message: "All Flights",
      flights: flights,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
// get single flight
exports.getFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    res.status(200).json({
      message: "flight found",
      flight,
    });

  } catch (error) {

  }
}
//add/book flight
exports.boookFlight = async (req, res) => {
  try {
    const {title, price} = await req.body;
    const newFlight = {
      id: uuid(),
      title,
      price,
      time: new Date().toDateString(),
      date: new Date().toLocaleTimeString()
    }
  
    Flights.push(newFlight); 

    res.status(201).json({
      message: "Flight added",
      newFlight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

// update/edit flight
exports.updateFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    const {title, time, price, date} = await req.body;
    flight.title = title;
    flight.time = time;
    flight.price = price;
    flight.date = date;
    res.status(200).json({
      message: "Flight updated",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 }
 
// delete flight
exports.deleteFlight = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    Flights.splice(Flights.indexOf(flight), 1);
    res.status(200).json({
      message: "flight deleted",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}