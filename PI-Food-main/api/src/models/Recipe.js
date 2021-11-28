const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:  {
          msg: "Must be an integer number of pennies"
        }
      },
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://media.istockphoto.com/vectors/sketches-from-groceries-products-vector-id964367658'
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    instructions: {
      type: DataTypes.TEXT
    },
  });
};
