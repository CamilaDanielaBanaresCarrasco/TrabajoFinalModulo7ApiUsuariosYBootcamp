import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    }
}, {
    tableName: 'users',
    createdAt: false,
    updatedAt: false
});


const testFetchUsers = async () => {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (error) {
    console.error("Error al recuperar usuarios: ", error);
  }
}

testFetchUsers();


export { User }


