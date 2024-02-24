import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";
import userModel from "./user.model.js";

const blogModel = sequelize.define('blog', {

    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    body: {
      type:DataTypes.TEXT,
      allowNull: false
    }
  });

 

  userModel.hasMany(blogModel,{
     onDelete:'CASCADE',
     foreignKey:{
        name:'userId',
        type:DataTypes.INTEGER
     }

  });

  blogModel.belongsTo(userModel);

  export default blogModel;
  