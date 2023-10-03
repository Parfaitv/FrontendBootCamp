module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Orders', [
            {
                items: [1,2,3],
                userId: 1,
            },
            {
                items: [4,5,6],
                userId: 2,
            },
            {
                items: [7,8,9],
                userId: 3,
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Orders', null, {});
    }
};