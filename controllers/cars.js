const asyncHandler = require('express-async-handler');
const carModel = require('../model/cars.js');

const getCars = asyncHandler(async (req, res) => {
  const { code, data } = await carModel.getCars();
  res.status(code).json(data);
});

const deleteCar = asyncHandler(async (req, res) => {
  const { code, data } = await carModel.deleteCar(req.id);
  res.status(code).json(data);
});

const addCar = asyncHandler(async (req, res) => {
  const { code, data } = await carModel.addCar(req.body);
  res.status(code).json(data);
});

const changeStatusCar = asyncHandler(async (req, res) => {
  const { code, data } = await carModel.changeStatusCar(req.id, req.body);
  res.status(code).json(data);
});

module.exports = { getCars, deleteCar, addCar, changeStatusCar };
