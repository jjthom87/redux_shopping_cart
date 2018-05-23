'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define('Cart', {
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Users',
        key: 'id'
      },
      field: 'user_id',
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      references: {
        model: 'Products',
        key: 'id'
      },
      field: 'product_id',
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Cart;
};