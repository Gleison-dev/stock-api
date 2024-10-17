import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
);

const testConnection = async () => {
  try {
    sequelize.authenticate();
    console.log("Conexão com o banco de dados efetuada :)");
  } catch (error) {
    return console.error("Erro ao conectar com o banco de dados :(");
  }
};

export { sequelize, testConnection };
