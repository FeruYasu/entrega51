module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('rooms', 'logo_id', {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      })
      .then(() => {
        return queryInterface.addColumn('rooms', 'user_id', {
          type: Sequelize.INTEGER,
          references: { model: 'users', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        });
      })
      .then(() => {
        return queryInterface.addColumn('rooms', 'maxusers', {
          type: Sequelize.INTEGER,
        });
      })
      .then(() => {
        return queryInterface.addColumn('rooms', 'useronline', {
          type: Sequelize.INTEGER,
        });
      });
  },

  down: queryInterface => {
    return queryInterface
      .removeColumn('rooms', 'user_id')
      .then(() => {
        return queryInterface.removeColumn('rooms', 'file_id');
      })
      .then(() => {
        return queryInterface.removeColumn('rooms', 'maxusers');
      })
      .then(() => {
        return queryInterface.removeColumn('rooms', 'useronlines');
      });
  },
};
