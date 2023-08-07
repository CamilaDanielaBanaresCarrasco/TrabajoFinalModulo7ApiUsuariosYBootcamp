import { User } from "./user.js";
import { Bootcamp } from "./bootcamp.js";
import { User_bootcamp } from "./user_bootcamp.js";

// Un usuario puede estar en varios bootcamps
User.belongsToMany(Bootcamp, {
    through: User_bootcamp,
    foreignKey: 'user_id',
});

// Un bootcamp puede tener varios usuarios
Bootcamp.belongsToMany(User, {
    through: User_bootcamp,
    foreignKey: 'bootcamp_id',
});