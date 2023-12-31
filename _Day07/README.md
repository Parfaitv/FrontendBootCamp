#  Day 07 - Frontend boot camp

## Chapter I


### Мемоизация в React

Для оптимизации в React нам необходимо понять концепцию мемозации. Мемоизация - процесс кешированиия результатов работы функции и возврата кеша при последующих запросов.

Что происходит при ререндеринге компонента? Функция данного компонента повторно вызывается, при этом если он имеет дочерние компоненты, их функции также будут вызываться повторно. Далее результаты сравниваются с DOM, чтобы определить необходиимо ли обновлять пользовательский интерфейс. Данный процесс называется согласованием.

Поскольку компоненты  —  это функции, их можно мемоизировать.

## React.memo 
React.Memo — компонент высшего порядка. Похож на React.PureComponent, но предназначен для функциональных компонентов. Компонент высшего порядка — это функция, которая принимает дочерний компонент и параметры, и затем создаёт контейнер поверх дочернего компонента.

React.memo возвращает purified Component. Именно его мы и будем отрисовывать в разметке JSX. Когда свойства и состояние компонента меняются, React сравнивает предыдущие и текущие свойства и состояния компонента. И только если они неидентичны, компонент-функция перерисовывается.

## useMemo

Хук useMemo предназначен для оптимизации и возвращает мемоизированное значение. 

## useCallback

Важным инструментом, предотвращающим ненужный повторный рендеринг мемоизированных компонентов, является useCallback. При передаче функции в мемоизированный компонент вы можете нечаянно устранить эффект мемоизации, не мемоизируя эту функцию с помощью useCallback. Причина — в равенстве ссылок.

[Примеры с выше расмотренными хуками](./materials/Memoization.md).
## Chapter II

### Работа с public API

Что же такое public API? Название говорит само за себя — это публичные API, к которым разработчик может обратиться за различными данными. Хорошим примером public API будет [сервис](https://pokeapi.co) с помощью которого можно получить данные о любом покемоне.

**Упражнение 1.** \
Вам нужно написать полноценное  SPA приложение, но вместо собственного бекенда вы будете использовать [Public API](https://pokeapi.co/api/v2/). \


**Упражнение 2.** \
Теперь вам надо оптимизировать ваше приложение. Избавиться от лишних рендеров с помощью хуков useCallback/useMemo и React.memo().
