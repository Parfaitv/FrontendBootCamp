module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Orders", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            items: {
                allowNull: false,
                type: Sequelize.ARRAY(Sequelize.INTEGER),
                defaultValue: []
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id',
                    as: 'userId'
                }
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Orders");
    }
};