module.exports = function(sequelize, DataTypes) {
    var Trip = sequelize.define("Trip", {
      userID: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      destination: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      dateStart: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateEnd: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    });
    return Trip;
  };
