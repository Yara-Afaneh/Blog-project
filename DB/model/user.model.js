import { DataTypes } from "sequelize";
import {sequelize} from "../connection.js";


const userModel= sequelize.define('users',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})

export default userModel;