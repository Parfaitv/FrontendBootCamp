В приложении должно быть 4 страницы: 

**Страница 1** (http://localhost:3000/) ([макет страницы](misc/images/main_page.png))
 
 Пользователь видит инпут для ввода id сотрудника (официанта)
 После ввода на странице появляется список всех заказов, с которыми работал данный сотрудник

**Страница 2** (http://localhost:3000/orders) ([макет страницы](misc/images/orders_page.png))

 Пользователь видит простую форму, состоющую из 2-ух селектов. В первом селекте нужно выбрать официанта, во втором сформировать заказ из представленных блюд
 В случае успешной отправки данных с формы пользователя перенаправляет на страницу заказа, иначе появляется сообщение с текстом ошибки


**Страница 3** (http://localhost:3000/orders/id) ([макет страницы](misc/images/order_page.png))
 
 На данной странице пользователь видит всю информацию о заказе (id заказа можно получить из uri). В табличном виде перечислены блюда из заказа (вместе с картинаками), внизу страницы указана текущая стоимость заказа и кнопка ‘Закрыть заказ’

**Страница 4** (http://localhost:3000/menu)  ([макет страницы](misc/images/menu_page.png))

  На текущей странице в табличном виде перечислены все блюда из меню, с картинками, информацией из описания и кол-во каллорий в блюде
