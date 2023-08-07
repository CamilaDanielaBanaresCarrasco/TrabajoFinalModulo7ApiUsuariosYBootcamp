

import { User } from "../models/user.js";
import { Bootcamp } from "../models/bootcamp.js";
import { User_bootcamp } from "../models/user_bootcamp.js"


// Crear y guardar un nuevo Bootcamp
 const createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json(bootcamp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agregar un Usuario al Bootcamp
const addUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const bootcamp = await Bootcamp.findByPk(req.params.bootcampId);
    if (!bootcamp) {
      return res.status(404).json({ message: 'Bootcamp not found' });
    }
    await User_bootcamp.create({ user_id: user.id, bootcamp_id: bootcamp.id });
    res.status(201).json({ message: 'User added to Bootcamp' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener los Bootcamp por id
const findById = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByPk(req.params.id, {
      include: {
        model: User,
        as: 'Users',
        through: {
          attributes: [], 
        }
      }
    });
    if (bootcamp) {
      res.status(200).json(bootcamp);
    } else {
      res.status(404).json({ message: 'Bootcamp not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todos los Usuarios incluyendo los Bootcamp
 const findAll = async (req, res) => {
  try {
    const bootcamps = await Bootcamp.findAll({ include: User });
    res.status(200).json(bootcamps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export {
  createBootcamp,
  addUser,
  findById,
  findAll
}