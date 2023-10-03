module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('MenuItems', [
            {
                title: 'Burger',
                picture: 'https://burgerspicture.ru',
                cost: 499,
                callQuantity: 20,
                description: 'Sochniy Burger',
            },
            {
                title: 'Hot-Burger',
                picture: 'https://burgerspicture.ru',
                cost: 300,
                callQuantity: 9,
                description: 'Sochniy Burger',
            },
            {
                title: 'CheezBurger',
                picture: 'https://burgerspicture.ru',
                cost: 799,
                callQuantity: 5,
                description: 'Sochniy Burger',
            },
        ]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('MenuItems', null, {});
    }
};