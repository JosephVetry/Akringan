'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cart.belongsTo(models.Product, { foreignKey: 'ProductId'})
      Cart.belongsTo(models.Customer, { foreignKey: 'CustomerId'})
    }
  }
  Cart.init({
    ProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'ProductId is required'},
        notEmpty: { msg: 'ProductId is required' }
      }
    },
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'CustomerId is required'},
        notEmpty: { msg: 'CustomerId is required' }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Status is required'},
        notEmpty: { msg: 'Status is required' }
      }
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};