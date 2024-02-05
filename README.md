# Проект: «Книжный интернет-магазин: React + Next.js»

### Задача проекта:

+ Сверстать главную страницу, страницу карзины и страницу пользователя интернет-магазина Bookshop.

+ Подключить Google Books API.

+ Подключить созданный ранее слайдер.

+ Поработать над правильной организацией проекта:

  &nbsp;&nbsp;&nbsp; реализовать проект на Next.js;

  &nbsp;&nbsp;&nbsp; реализовать модульную структуру.

### Функциональные требования:

+ Шапка сайта.

Шапка содержит логотип, навигацию и набор кнопок.

Кнопки авторизации и корзины активны и их страницы реализованы с помощью компонента Link. 

При добавлении товара в корзину у иконки должен появиться бейджик с количеством товара в корзине.

+ Слайдер.

Под шапкой сайта располагается слайдер.

Слайдер автоматически должен пролистывать изображения каждые 3-5 секунд, а после последнего изображения вновь переключается на первое. Перелистывать изображения можно также с помощью точек под слайдером.

+ Список категорий и список книг.

Под слайдером в левой части экрана располагается список категорий. Активная категория должна быть выделена визуально.

По умолчанию в качестве активной выбрана первая категория в списке. Клик на неактивную категорию делает её активной, и список книг перезагружается, чтобы отобразить книги из этой категории.

Список книг подгружается из Google Books API в соответствии с выбранной категорией. Для списка книг необходимо реализовать ленивую загрузку: сначала подгружаются первые 6 книг, по клику на кнопку «Load more» — ещё 6, и так далее.

+ Карточка книги.

В карточке книги должна быть отображена следующая информация:

  &nbsp;&nbsp;&nbsp; Обложка. Если API не возвращает обложку, подставить вместо нее любую картинку-плейсхолдер.

  &nbsp;&nbsp;&nbsp; Автор. Если авторов несколько, перечислить их через запятую.

  &nbsp;&nbsp;&nbsp; Заголовок.

  &nbsp;&nbsp;&nbsp; Рейтинг: от 1 до 5 звёздочек плюс общее количество отзывов. Если в данных о книге нет рейтинга, не показывать эту строчку.

  &nbsp;&nbsp;&nbsp; Описание. Если текст в описании занимает больше 3-х строк, его нужно обрезать и добавить в конце многоточие.

  &nbsp;&nbsp;&nbsp; Цена с указанием валюты. Если в данных о книге нет цены, не показывать эту строчку.

Под описанием каждой книги должна быть кнопка «Buy now». При клике на неё товар добавляется в корзину, а кнопка меняет внешний вид.

Информация о книгах, добавленных в корзину, должна сохраняться в localStorage.

### Запросы API:

+ Создать API для получения книг.
  
+ Создать API для авторизации пользователя со следующим функицоналом:

  &nbsp;&nbsp;&nbsp; Валидация полей. Поле E-mail должно принимать только электронную почту. Пароль должен состоять из не менее чем 6-9 символов.

  &nbsp;&nbsp;&nbsp; Если данные правильные, то ответ должен вернуть данные об успешной авторизации.

  &nbsp;&nbsp;&nbsp; Если данные неправильные, сервер отвечает 400 статусом.

  &nbsp;&nbsp;&nbsp; Эндпоинт обрабатывает только POST-запросы.

### Требования к использованию Next.js:

+ Добавить Redux Toolkit и Redux Persist в проект для использования хранилищ для:

  &nbsp;&nbsp;&nbsp; Сохрания книг в корзине и информации о них;

  &nbsp;&nbsp;&nbsp; Текущего фильтра поиска на главной странице;

  &nbsp;&nbsp;&nbsp; Авторизации пользованиетя - приложение обращается к API, достает данные о пользователе и сохраняет.

+ Необходимо использовать компонент Image из next/image в:

  &nbsp;&nbsp;&nbsp; В слайдере на главной странице;

  &nbsp;&nbsp;&nbsp; Обложке книги на главной странице;

  &nbsp;&nbsp;&nbsp; Обложке книги в корзине;

  &nbsp;&nbsp;&nbsp; Статичном изображении в профиле.

+ Подключить шрифт Montserrat в приложение с помощью next/font.

### Требования к верстке и CSS:

+ Вёрстка должна соответствовать макету. Добиваться Pixel-Perfect соответствия не обязательно, но основные моменты должны быть соблюдены:

  &nbsp;&nbsp;&nbsp; Цветовая гамма,

  &nbsp;&nbsp;&nbsp; Шрифты,

  &nbsp;&nbsp;&nbsp; Размеры,

  &nbsp;&nbsp;&nbsp; Отступы.

+ Приложение должно корректно отображаться на различных разрешениях. Дизайна для мобильной версии в макете нет, поэтому нужно реализовать её самостоятельно.

+ Необходимо соблюдать семантическую вёрстку.

В приложении должны присутствовать разделы ``` <header> ```, ``` <main> ``` и ``` <nav> ```. Ссылки должны быть прописаны в теге ``` <a> ```, кнопки должны быть реализованы элементом ``` <button> ```, и так далее. Не забывать также про обязательный атрибут alt у изображений.

+ При наведении курсора на любые кликабельные элементы должен появляться cursor: pointer.

+ Использовать селекторы по тегу и id для задания стилей нельзя. Использовать классы.

### Прочие требования:

+ Писать код аккуратно, с соблюдением форматирования и отступов.

+ Стараться давать CSS-классам, переменным и функциям осмысленные имена.

+ Стараться использовать современный ES6 синтаксис: стрелочные функции, декомпозицию, Spred и т.д.

+ При написании кода стараться следовать принципам KISS (Keep It Short and Simple - не усложняй) и DRY (Don’t Repeat Yourself - не повторяйся).

+ Проект должен использовать TypeScrit.

+ Проект должен использовать встроенные методы Next.js для получения данных (getStaticProps или getSeverSideProps).
  
+ Задеплоить готовое приложение на сайте vercel.com.

### Иснтрукция для разработки и тестирования

+ npm

```
npm i
npm run dev
npm run build
```
+ yarn

```
yarn add
yarn dev
yarn build
```

### Результат работы:

#### Ссылка на страницу книжного интернет-магазина:

• https://pj-11-bookshop-react-next-js-ncl8.vercel.app

#### Внешний вид страницы книжного интернет-магазина

• Главная страница 
![url2img_65c06f38bc41f](https://github.com/ParamonovIvan/PJ-11_Bookshop_React-Next.js/assets/131868856/38a2402d-1074-4a40-86e9-1a342d0a061d)

• Главная страница с окошком для входа пользователя
![2s](https://github.com/ParamonovIvan/PJ-11_Bookshop_React-Next.js/assets/131868856/9ff80ff9-9996-4b96-8d5f-2ea0603f3c2f)

• Страница профиля
![3s](https://github.com/ParamonovIvan/PJ-11_Bookshop_React-Next.js/assets/131868856/028d2682-f334-481e-a682-b507b2597f4b)

• Страница корзины
![4s](https://github.com/ParamonovIvan/PJ-11_Bookshop_React-Next.js/assets/131868856/60ff7c18-4fd9-47cb-9a21-563874d9092f)
