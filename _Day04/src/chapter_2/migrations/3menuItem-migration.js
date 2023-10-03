module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("MenuItems", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
            },
            picture: {
                type: Sequelize.STRING,
            },
            cost: {
                type: Sequelize.INTEGER,
            },
            callQuantity: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.STRING,
            },
            orderId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Orders',
                    key: 'id',
                    as: 'orderId',
                },
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("MenuItems");
    }
};