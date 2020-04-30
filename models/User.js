module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      freezeTableName:true,
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Publication, {
      foreignKey: "users_id",
      as: "user"
    });
  };

  return User;
};
