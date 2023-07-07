// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type:DataTypes.INTEGER, 
      allowNULL: false,
      primaryKey: true, 
      autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING, 
    allowNULL: false,
  }, 
  price: {
    type:DataTypes.DECIMAL(10, 2), 
    allowNULL: false,
    isDecimal: true, 
  }, 
  stock: { 
    type:DataTypes.INTEGER,
    allowNULL: false,
    defaultValue: 10,
    isNumeric: true,

  },
 
  },
 
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
