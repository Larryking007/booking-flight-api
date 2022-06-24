const { Flights } = require("../models/Flight");
const uuid = require("uuid").v4;

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
    const {title, time, price, date} = await req.body;
    const newFlight = {
      id: uuid(),
      title,
      time,
      price,
      date
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
exports.updateFlights = async (req, res) => {
  try {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    const {title, time, price, date} = await req.body;
    flight.title = title;
    flight.time = time;
    flight.price = price;
    flight.date = date;
    res.status(201).json({
      message: "Flight updated",
      flight,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
 }
// delete flight
