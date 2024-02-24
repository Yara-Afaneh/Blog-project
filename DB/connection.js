import {Sequelize} from 'sequelize';
export const sequelize = new Sequelize('blog-project', 'root', '', {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export const connectDb=async()=>{
    try{
        return await sequelize.sync();
    } catch(err){
        console.log(err);
    }
  }






