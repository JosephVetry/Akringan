'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.Customer, { foreignKey: 'CustomerId'})
    }
  }
  Transaction.init({
    CustomerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'CustomerId is required'},
        notEmpty: { msg: 'CustomerId is required' }
      }
    },
    statusPayment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Status Payment is required'},
        notEmpty: { msg: 'Status Payment is required' }
      }
    },
    totalPayment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: 'Total Payment is required'},
        notEmpty: { msg: 'Total Payment is required' }
      }
    },
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};