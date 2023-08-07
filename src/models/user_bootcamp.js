import { DataTypes } from "sequelize";
import { sequelize } from "../cnn/cnn.js";
import { User } from "./user.js";
import { Bootcamp } from "./bootcamp.js";

const User_bootcamp = sequelize.define('User_bootcamp', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    bootcamp_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Bootcamp,
            key: 'id'
        }
    }
}, {
    tableName: 'user_bootcamp',
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    primaryKey: ['user_id', 'bootcamp_id']
});

export { User_bootcamp }