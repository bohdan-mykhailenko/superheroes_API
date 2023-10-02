'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Superheroes',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        nickname: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        real_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        origin_description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        superpowers: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        catch_phrase: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        images: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false,
        },
      },
      {
        timestamps: false,
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Superheroes');
  },
};
