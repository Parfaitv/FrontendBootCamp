module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Users", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            orders: {
                type: Sequelize.ARRAY(Sequelize.INTEGER),
                defaultValue: [],
            },
            role: {
                type: Sequelize.STRING,
                defaultValue: 'user'
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
    }
};