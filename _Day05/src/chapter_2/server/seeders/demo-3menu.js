module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('MenuItems', [
            {
                title: 'Burger',
                picture: '300003a9-77d2-46b5-89e7-9cf720d414dc.jpg',
                cost: 499,
                callQuantity: 900,
                description: 'Sochniy Burger',
            },
            {
                title: 'Hot-Burger',
                picture: '300003a9-77d2-46b5-89e7-9cf720d414dc.jpg',
                cost: 300,
                callQuantity: 1099,
                description: 'Sochniy Hot-Burger',
            },
            {
                title: 'CheezBurger',
                picture: '300003a9-77d2-46b5-89e7-9cf720d414dc.jpg',
                cost: 799,
                callQuantity: 1200,
                description: 'Sochniy CheezBurger',
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('MenuItems', null, {});
    }
};