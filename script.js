const items = [
    {
        title: "Массажер для лица",
        description:"Нефритовый роликовый массажер для лица, лифтинг, стройнящий формирователь",
        price: 100,
        img: ".img/facial-massager.jpeg",
        img: "./img/facial-massager.jpeg",
    },
    {
        title: "Спонж для умывания и массажа лица",
        description: "Спонж для умывания и массажа наверняка станет твоим любимчиком! С его помощью ты сможешь в разы повысить эффективность ежедневных процедур. Чистые поры, нежная кожа и сияющий цвет лица – благодаря этому бьюти-гаджету ты решишь сразу несколько задач.",
        price: 10,
        img: ".img/2.jpeg",
        img: "./img/2.jpeg",
    },
    {
        title: "Кристальная коллагеновая маска для век Collagen Active",
        description: "Увлажняет кожу, препятствует потере влаги, улучшает клеточный метаболизм. Оказывает лифтинговый эффект, способствует разглаживанию мелких морщинок.",
        price: 4,
        img: ".img/3.jpeg",
        img: "./img/3.jpeg",
    },
    {
        title: "Мезороллер (валик массажный)",
        description: "Использование мезороллера улучшает проникновение активных ингредиентов косметических средств через эпидермальный барьер, способствует увеличению синтеза коллагена за счет механической стимуляции кожи микроиглами длиной 0,5 мм, помогает восстановить соединительнотканную структуру дермы. Эффект от использования мезороллера сопоставим с результатами салонных процедур, но при этом его применение нетравматично и необременительно для семейного бюджета.",
        price: 60,
        img: ".img/4.jpeg",
        img: "./img/4.jpeg",
    },
    {
        title: "Трансдермальный комплекс — ботокс-эффект",
        description: "Трансдермальный комплекс с ботокс-эффектом включает в себя два средства высокой концентрации: микрокапсулы и мезококтейль. Средства стимулируют выработку собственного коллагена, способствуют разглаживанию морщин, действуют как локальный миорелаксант, сохраняя при этом естественную мимику. Заметно подтягивают контуры лица, делают кожу более упругой, оказывают омолаживающее действие.",
        price: 80,
        img: ".img/5.jpeg",
        img: "./img/5.jpeg",
    },
    {
        title: "Пилка-щетка для педикюра 4 функции",
        description: "Пилка-щетка для ступней незаменима для поддержания ног в красивом ухоженном виде.Используется для шлифования огрубевшей кожи стоп и пяток. Ее можно использовать как на сухую стопу, так и на распаренную. Она не травмирует и не разрушает структуру пяток, бережно снимая ороговевший слой за слоем.",
        price: 30,
        img: ".img/6.jpeg",
        img: "./img/6.jpeg",
    },
    {
        title: "Перчатки косметические Мультидом «Нежные ручки»",
        description: "Перчатки косметические Мультидом «Нежные ручки» BF17-11 — специальные эластичные перчатки для косметических процедур, помогут создать тепловой эффект, усиливающий действие косметических средств. На ночь намажьте кремом руки, и оденьте перчатки, чтобы усилить эффект. За ночь крем впитывается, увлажняя сухую кожу, при этом постельное белье не запачкается от крема.",
        price: 20,
        img: ".img/7.jpeg",
        img: "./img/7.jpeg",
    },
    {
        title: "Маникюрный набор",
        description: "Устройте маникюрный салон не выходя из дома! Теперь такое возможно с новым профессиональным набором для маникюра и педикюра. Продукты по уходу за ногтями позволяет удалить кутикулу, обработать мозоли, удалить огрубевшую кожу, а затем придать форму, подпилить,сгладить и отполировать поверхность ногтей.",
        price: 300,
        img: ".img/8.jpeg",
        img: "./img/8.jpeg",
    },
    {
        title: "Набор для окрашивания воло",
        description: "Набор предназначен для окрашивания волос как в домашних условиях, так и в салоне красоты. Набор состоит из 3-х предметов: миски для смешивания краски, кисти для ее нанесения и расчески для разделения прядей и распределения краски по всей длине волос.",
        price: 20,
        img: ".img/9.jpeg",
        img: "./img/9.jpeg",
    },
    {
        title: "Контейнер для косметики (бижутерии) 3 ячейки",
        description: "Все аксессуары, помогающие женщинам наводить красоту, и храниться тоже должны в чем-то красивом. Изящные изделия, размещенные на прикроватном столике или полочке в ванной, станут отличным обрамлением для косметики и украшений.",
        price: 15,
        img: ".img/10.jpeg",
        img: "./img/10.jpeg",
    },
    {
        title: "Косметичка нейлон 19x11см, застежка на молнии",
        description: "Материал: нейлон, металл",
        price: 15,
        img: ".img/11.jpeg",
        img: "./img/11.jpeg",
    },
    {
        title: "Расческа массажная для волос.",
        description: "Массажная расческа для волос подходит для всех типов волос и стрижек разной длины. Удобная и приятная в применении, легкое расчесывание.",
        price: 10,
        img: ".img/12.jpeg",
        img: "./img/12.jpeg",
    },
    {
        title: "Зеркало косметическое",
        description: "Его положение можно регулировать по вертикали и горизонтали, «наводя прицел» в нужную точку лица. Встроенная подсветка работает от четырёх батареек АА, поэтому вы можете выбирать любое удобное место для нанесения макияжа. Яркость регулируется лёгким прикосновением к сенсорной кнопке внизу — лампы будут освещать лицо, но не слепить глаза. А на подставке вы найдёте небольшой лоток для хранения аксессуаров: спонжей, ватных палочек, бижутерии и многого другого.",
        price: 80,
        img: ".img/13.jpeg",
        img: "./img/13.jpeg",
    },
    {
        title: "Весы напольные",
        description: "Помимо массы тела, они показывают соотношение костной, мышечной и жировой ткани, скорость метаболизма, физиологический возраст организма, а также содержание воды и белка. Все эти показатели загружаются в приложение Huawei Health, где можно следить за их динамикой и получать советы по ведению здорового образа жизни. Скромный помощник позволит довести до совершенства ваши программы тренировок и планы питания.",
        price: 200,
        img: ".img/14.jpeg",
        img: "./img/14.jpeg",
    },
    {
        title: "Мультистайлер Rowenta Elite Model Look CF4132D0",
        description: "Он укомплектован множеством насадок — двумя плойками разного размера, спиральными щипцами, зажимами для гофре и круглой щёткой. А в качестве бонуса вы получаете набор заколок и мягкий дорожный чехол, в который помещаются все эти аксессуары.",
        price: 500,
        img: ".img/15.jpeg",
        img: "./img/15.jpeg",
    },

];

//Товары после применения поиск/фильтров
// Которые мы будем показывать пользователю

let currentState = [...items];

//Переменная с контейнером для товаров
const itemsContainer = document.querySelector('#shop-items');

//шаблон для товаров
const itemTemplate = document.querySelector('#item-template');

//Текст если ни чего не найдено
const nothingFound = document.querySelector("#nothing-found");

//Функция для отрисовки
//В качестве параметра - товарыб которые нужно отисовать
function renderItems(arr) {
    //Сбрасываем текст "Ничего не найдено" после предыдущего поиска
    nothingFound.textContent = "";

    //Чистим контейнер с товарами, если там что то было
    itemsContainer.innerHTML = "";

    //Отрисовываем товары из переданного параметра arr
    arr.forEach((item) => {
        //вызываем prepareShopItem для каждого товара
        // и подставляем результат в верстку
        items.itemsContainer.append(prepareShopItem(item));

    });

    //Если массив товара пустой, отображаем текст, что ни чего не нашли
    if (!arr.lehgth) {
        nothingFound.textContent = "Ничего не найдено";

    }
}

//Функция-хелпер для сортировки товаров по алфавиту
function sortByAlphabet(a, b) {
    //Смотрим на свойство title
    //Если title первого товара по алфавиту больше второго...
    if (a.title > b.title) {
        return 1;
    }
    //Если title второго товара больше
    if (a.title < b.title) {
        return -1;
    }
    // Если оно равны
    return 0;
}

// Вызываем функцию для отрисовки в самом начале
//И тут же сортируем по алфавиту
renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));


//Функция для отрисовки конкретного товара
function prepareShopItem (shopItem) {
    //Деструктурируем свойства обьекта
    const {title, description, img, price} = shopItem;
    
    //Берем за основу шаблон товара
    const item = itemTemplate.content.clineNode(true);

    //Наполняем его информацией из обьекта
    item.querySelector("h1").textContent = title;
    item.querySelector("p").textContent = description;
    item.querySelector(".price").textContent = `${price}б.р`;
    item.querySelector("img").src = img;

    //Возвращаем HTML-элемент
    return item;
};


