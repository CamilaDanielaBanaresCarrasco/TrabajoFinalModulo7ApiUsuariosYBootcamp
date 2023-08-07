import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";

const Bootcamp = sequelize.define('Bootcamp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cue: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 5,
            max: 10
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'bootcamp',
    createdAt: false,
    updatedAt: false
});

export { Bootcamp }