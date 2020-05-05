module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn('users', 'avatar_id', {
        type: Sequelize.INTEGER,
        references: { model: 'files', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      })
      .then(() => {
        return queryInterface.addColumn('users', 'company_id', {
          type: Sequelize.INTEGER,
          references: { model: 'companies', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        });
      });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id').then(() => {
      return queryInterface.removeColumn('users', 'company_id');
    });
  },
};
