const Flights = require("../models/Flight");

// get all flights
exports.getFlights = async (req, res) => {
  try {
    const Flight = Flights;
    res.status(200).json(flights);
  } catch {
    res.status(500).json({ message: err });
  }
};
// get single flight

//create new flight

// update/edit flight

// delete flight
