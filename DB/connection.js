import {Sequelize} from 'sequelize';
export const sequelize = new Sequelize('freedb_Blog-project', 'freedb_YaraAfaneh', '@gH7f23$Gcqz$G6', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  export const connectDb=async()=>{
    try{
        return await sequelize.sync();
    } catch(err){
        console.log(err);
    }
  }






