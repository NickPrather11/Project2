module.exports = function(sequelize, DataTypes) {
  var Journal = sequelize.define("Journals", {
    title: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    }
  });
  Journal.associate = function(models) {
    Journal.belongsToMany(models.Tags, {
      through: "JournalTags",
      as: "tags",
      foreignKey: "journalId"
    });
  };
  return Journal;
};
