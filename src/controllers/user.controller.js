import { User } from "../models/user.js";
import { Bootcamp } from "../models/bootcamp.js";


// Crear y guardar usuarios
 const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Obtener los Bootcamp de un usuario
   const findUserById = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id, { include: Bootcamp });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
// Obtener todos los Usuarios incluyendo los Bootcamp
const findAll = async (req, res) => {
  try {
    const users = await User.findAll({ include: Bootcamp });
    res.status(200).json(users);
    console.log("ESTOS SON LOS USUARIOS", JSON.stringify(users, null, 2)); // <---- aquí
  } catch (error) {
    res.status(500).json({ message: error.message +"Aqui" });
  }
};
  
  // Actualizar usuario por Id
   const updateUserById = async (req, res) => {
    try {
      const [updated] = await User.update(req.body, {
        where: { id: req.params.id }
      });
      if (updated) {
        const updatedUser = await User.findOne({ where: { id: req.params.id } });
        res.status(200).json({ user: updatedUser });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Eliminar un usuario por Id
   const deleteUserById = async (req, res) => {
    try {
      const deleted = await User.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        res.status(204).json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  async function checkUsuariosData() {
    try {
      const usuarios = await User.findAll();
      usuarios.forEach((usuario) => {
        console.log("Estos son los usuarios" + usuario.toJSON());
      });
    } catch (error) {
      console.error("Error al obtener los usuario:", error);
    }
  }
  
  checkUsuariosData();


  export{
    createUser, 
    findUserById , 
    findAll, 
    updateUserById,
    deleteUserById

  }
