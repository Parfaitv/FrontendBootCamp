#  Day 06 - Frontend boot camp

## Chapter I

В этой главе мы познакомимся с React. Узнаем немного подробностей о его происхождении и сценариях использования, настроим базовый набор инструментов на нашем локальном компьютере и в процессе узнаем немного о том, как React работает.
  
### React

React — это библиотека JavaScript, которая используется для создания пользовательского интерфейса. Первый релиз библиотеки увидел свет в марте 2013 года. Текущей версий на данный момент является версия React v18.2.0.

Основная цель React — минимизировать ошибки, возникающие при разработке пользовательских интерфейсов. Это достигается за счёт использования компонентов — автономных логических фрагментов кода, которые описывают часть пользовательского интерфейса. А уже эти компоненты объединяются для создания полноценного пользовательского интерфейса. React абстрагирует большую часть работы по визуализации, оставляя вам возможность сосредоточиться на дизайне.

### Create react app

### Классовые и функциональные компоненты

Раньше было всего два способа определения React-компонентов, первый — это React.createClass(), а второй — классы ES6.
Дальнейшая эволюция привнесла функциональные компоненты. И хоть состояний они не имели, но отлично подходили для более простых компонентов.
В итоге в версии 16.8 команда React ввела хуки, не только ставя функциональные компоненты вровень с классовыми, но также делая их более лёгкими в написании и даже потенциально превосходящими классовые компоненты.

### Life циклы компонента

Жизненный цикл компонента в React — одна из наиболее важных концепций, которую следует знать. Почему? Потому что понимание жизненного цикла позволит вам правильно обрабатывать события в вашем приложении и обеспечивать корректную передачу данных между компонентами. Компоненты в React создаются, решают задачу и прекращают свое существование. 

### JSX

JSX — это надстройка на JavaScript, которая позволяет использовать XML-подобный синтаксис в JavaScript.

### Props

Можно передавать данные в компоненты с помощью так называемых пропсов

### React hooks

Что же такое хуки?

Хуки — это функции, с помощью которых мы можем хранить и управлять состоянием, а также получить доступ к методам жизненного цикла React в функциональных компонентах. Хуки не работают внутри классов — они дают вам возможность использовать React без классов.

Первыe хуки, которые мы изучим, это функции useState и useEffect

### Синтетические события

Обработка событий в React-элементах очень похожа на обработку событий в DOM-элементах. Но есть несколько синтаксических отличий: \
`-` События в React именуются в стиле camelCase вместо нижнего регистра. \
`-` С JSX вы передаёте функцию как обработчик события вместо строки.

### Рендеринг списков и условия

React позволяет разделить логику на независимые компоненты. Эти компоненты можно показывать или прятать в зависимости от текущего состояния.
Условный рендеринг в React работает так же, как условные выражения работают в JavaScript.

Для того, чтобы отрисовать массив элементов, можно использовать JavaScript-функцию map(). Однако для элементов внутри map есть 1 обязательное условие, описание которого вы найдете тут

**Упражнение 1.** \
Вам нужно написать небольшое SPA приложение без использования backend. После установки CRA и инициализации проекта с его помощью очистите все ‘лишнее’. Задача состоит в следующем — на главной странице расположены 2 кнопки: \
 `-`  ‘Stopwatch’ при клике на даннную кнопку отображается одноименный компонент с секундомером. Он засекает и показывает количество времени в формате hh : mm : ss, которое отображает этот компонент. !Если компонент не отображается, то setInterval (если вы решили делать с его помощью), должен очищаться из стека браузера. \
 `-`  ’StudentInfo’ при клике на кнопку также отображется одноименный компонент, в котором содержится информация о вас — ФИО, Возраст, Фото. Данный компонент отображается по дефолту при загрузке страницы.
  
  **Упражнение 2.** \
Теперь давайте немного улучшим наше приложение. Вам понадобиться написать новый компонент ’SomeList’. Добавьте в компонент Stopwatch 2 кнопки которые будут отображаться под ‘циферблатом': \
 `-` ‘Add’. При клике на эту кнопку текущий результат времени будет добавляться в список значений компонента SomeList. \
 `-` ‘Reset’. При клике все значения в SomeList будут очищаться.

Список значений в SomeList изначально пустой, пока юзер не добавит туда какой-то результат. При закрытии компонента секундомера список обнуляется.
