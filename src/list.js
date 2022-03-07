const guestList = [
    {
        id: "parents",
        greeting: "Дорогі",
        name: "Батьки",
        plural: true
    },
    {
        id: "grandparents",
        greeting: "Дорогі",
        name: "Іларіон та Олександра",
        plural: true
    },
    {
        id: "ankucavadim",
        greeting: "Дорогі",
        name: "Вадим та Наталія",
        plural: true
    },
    {
        id: "ankucasergii",
        greeting: "Дорогі",
        name: "Сергій, Алла та Матвій",
        plural: true
    },
    {
        id: "chibizov",
        greeting: "Дорогі",
        name: "Саша, Амалія та Арсіне",
        plural: true
    },
    {
        id: "gomel",
        greeting: "Дорогі",
        name: "Леонід та Зіна",
        plural: true
    },
    {
        id: "gomel1",
        greeting: "Дорогі",
        name: "Вадим та Софія",
        plural: true
    },
    {
        id: "rodinnaann",
        greeting: "Дорогі",
        name: "Інна та Анна",
        plural: true
    },
    {
        id: "rodenkovitalk",
        greeting: "Дорогі",
        name: "Віталій та Надія",
        plural: true
    },
    {
        id: "statnik",
        greeting: "Дорогі",
        name: "Влад і Таня",
        plural: true
    },
    {
        id: "yrsanviktor",
        greeting: "Дорогі",
        name: "Віктор та Ніна",
        plural: true
    },
    {
        id: "yrsanj",
        greeting: "Дорогі",
        name: "Женя і Таня",
        plural: true
    },
    {
        id: "yrsanvitalik",
        greeting: "Дорогі",
        name: "Віталій та Аня",
        plural: true
    },
    {
        id: "yrsanigor",
        greeting: "Дорогі",
        name: "Ігор та Катя",
        plural: true
    },
    {
        id: "kioce",
        greeting: "Дорога",
        name: "Рая",
        plural: false
    },
    {
        id: "topfer",
        greeting: "Дорогі",
        name: "Руслан, Маргаріта та Аурелія",
        plural: true
    },
    {
        id: "kiocevitalik",
        greeting: "Дорогі",
        name: "Віталій та Ауріка",
        plural: true
    },
    {
        id: "oleshyk",
        greeting: "Дорогі",
        name: "Володимир і Любов ",
        plural: true
    },
    {
        id: "kiligoi",
        greeting: "Дорогі",
        name: "Леонід та Ольга",
        plural: true
    },
    {
        id: "vishavskii",
        greeting: "Дорога",
        name: "Сім'я Вічавських",
        plural: true
    },
    {
        id: "yaremko",
        greeting: "Дорога",
        name: "Сім'я Яремків",
        plural: true
    },
    {
        id: "yaremkoa",
        greeting: "Дорога",
        name: "Ангеліна",
        plural: false
    },
    {
        id: "tukova",
        greeting: "Дорога",
        name: "Оля",
        plural: false
    },
    {
        id: "torkolat",
        greeting: "Дорога",
        name: "Катя",
        plural: false
    },
    {
        id: "falishtinskiy",
        greeting: "Дорогі",
        name: "Наталя та Саша",
        plural: true
    },
    {
        id: "bezdetni",
        greeting: "Дорога",
        name: "Сім'я Бездітних",
        plural: true
    },
    {
        id: "alesia",
        greeting: "Дорога",
        name: "Олеся",
        plural: false
    },
    {
        id: "bubela",
        greeting: "Дорога",
        name: "Сім'я Бубела",
        plural: true
    },
    {
        id: "izavova",
        greeting: "Дорога",
        name: "Сім'я Канте",
        plural: true
    },
    {
        id: "liza",
        greeting: "Дорога",
        name: "Ліза та Іра",
        plural: false
    },
    {
        id: "babenko",
        greeting: "Дорога",
        name: "Лєна",
        plural: false
    },
    {
        id: "kante",
        greeting: "Дорога",
        name: "Наташа",
        plural: false
    },
    {
        id: "lyngy",
        greeting: "Дорога",
        name: "Сім'я Лунгу ",
        plural: true
    },
    {
        id: "drychina",
        greeting: "Дорогі",
        name: "Свєта і Дашка",
        plural: true
    },
    {
        id: "pug",
        greeting: "Дорога",
        name: "Сім'я Пиж",
        plural: true
    },
    {
        id: "tanya",
        greeting: "Дорогі",
        name: "Таня і Сабінка",
        plural: true
    },
    {
        id: "margo",
        greeting: "Дорога",
        name: "Марго",
        plural: false
    },
    {
        id: "drozd",
        greeting: "Дорога",
        name: "Сім'я Дрозд",
        plural: true
    },
    {
        id: "zborovski",
        greeting: "Дорогі",
        name: "Сергій та Зіна",
        plural: true
    },
    {
        id: "zborovski1",
        greeting: "Дорогі",
        name: "Андрій та Аня",
        plural: true
    },
    {
        id: "batsa",
        greeting: "Дорогий",
        name: "Андрюха",
        plural: false
    },
    {
        id: "batst",
        greeting: "Дорогий",
        name: "Толян",
        plural: false
    },
    {
        id: "punzyr",
        greeting: "Дорогий",
        name: "Андрюха",
        plural: false
    },
    {
        id: "kashpryk",
        greeting: "Дорогі",
        name: "Женя і Настя",
        plural: true
    },
    {
        id: "yasinko",
        greeting: "Дорога",
        name: "Сім'я Ясінько",
        plural: true
    },
    {
        id: "bernadskii",
        greeting: "Дорога",
        name: "Сім'я Бернадських ",
        plural: true
    },
    {
        id: "bernadskiia",
        greeting: "Дорогий",
        name: "Андрюха",
        plural: false
    },
    {
        id: "pedoryk",
        greeting: "Дорога",
        name: "Сім'я Педорук",
        plural: true
    },
    {
        id: "kybovich",
        greeting: "Дорога",
        name: "Сім'я Кубовичів",
        plural: true
    },
    {
        id: "zagarii",
        greeting: "Дорога",
        name: "Віка",
        plural: false
    },
    {
        id: "torkolato",
        greeting: "Дорогий",
        name: "Олег",
        plural: false
    },
    {
        id: "loskytov",
        greeting: "Дорога",
        name: "Сім'я Лоскутових",
        plural: true
    },
    {
        id: "lazar",
        greeting: "Дорога",
        name: "Сім'я Лазарів",
        plural: true
    },
    {
        id: "marnaya",
        greeting: "Дорога",
        name: "Наташа і Таня",
        plural: true
    },
    {
        id: "bigdailena",
        greeting: "Дорога",
        name: "Лєнчик",
        plural: false
    },
    {
        id: "bigbaiilla",
        greeting: "Дорогий",
        name: "Ілюха",
        plural: false
    },
    {
        id: "kareyan",
        greeting: "Дорога",
        name: "Сім'я Кареян",
        plural: true
    },
    {
        id: "ytish",
        greeting: "Дорога",
        name: "Сім'я Ютіш",
        plural: true
    },
    {
        id: "kirgan",
        greeting: "Дорога",
        name: "Оксана Кирган",
        plural: false
    },
    {
        id: "lypashko",
        greeting: "Дорога",
        name: "Сім'я Лупашко",
        plural: true
    },
    {
        id: "chibizlida",
        greeting: "Дорога",
        name: "Ліда ",
        plural: false
    },
    {
        id: "kolesnik",
        greeting: "Дорогі",
        name: "Льоша і Лоліта",
        plural: true
    },
    {
        id: "vladbrat",
        greeting: "Дорогий",
        name: "Владька",
        plural: false
    },
    {
        id: "dorin",
        greeting: "Дорогі",
        name: "Дорін і Світлана",
        plural: true
    },
    {
        id: "tolyalena",
        greeting: "Дорогі",
        name: "Толя і Лєна",
        plural: true
    },
    {
        id: "dishlova",
        greeting: "Дорога",
        name: "Інна ",
        plural: false
    },
    {
        id: "dishlova1",
        greeting: "Дорога",
        name: "Іра",
        plural: false
    },
    {
        id: "soldatov",
        greeting: "Дорога",
        name: "Сім'я Солдатових",
        plural: true
    },
    {
        id: "chornoblavskii",
        greeting: "Дорога",
        name: "Сім'я Чорноблавських ",
        plural: true
    },
    {
        id: "kaletnik",
        greeting: "Дорога",
        name: "Сім'я Калетників ",
        plural: true
    },
    {
        id: "tatevik",
        greeting: "Дорогі",
        name: "Євген і Татевік",
        plural: true
    },
    {
        id: "dgalilova",
        greeting: "Дорога",
        name: "Сім'я Джалілових",
        plural: true
    },
    {
        id: "ilona",
        greeting: "Дорога",
        name: "Ілона",
        plural: false
    },
    {
        id: "sashadasha",
        greeting: "Дорогі",
        name: "Саша і Даша",
        plural: true
    },
    {
        id: "bazulko",
        greeting: "Дорога",
        name: "Ірен",
        plural: false
    },
    {
        id: "bernfamily",
        greeting: "Дорога",
        name: "Сім'я Бернадських ",
        plural: true
    },
    {
        id: "tanasiychuk",
        greeting: "Дорогий",
        name: "Саньок",
        plural: false
    },
    {
        id: "semenyk",
        greeting: "Дорогий",
        name: "Антон",
        plural: false
    },
    {
        id: "kanonik",
        greeting: "Дорогий",
        name: "Вова",
        plural: false
    },
    {
        id: "melnik",
        greeting: "Дорога",
        name: "Сім'я Мельник",
        plural: true
    },
    {
        id: "zaharchenko",
        greeting: "Дорогий",
        name: "Саша",
        plural: false
    },
    {
        id: "korotkevich",
        greeting: "Дорогий",
        name: "Діма",
        plural: false
    },
    {
        id: "stretovichlena",
        greeting: "Дорога",
        name: "Лєна",
        plural: false
    },
    {
        id: "kirichenko",
        greeting: "Дорогі",
        name: "Влад і Альона",
        plural: true
    },
    {
        id: "dalykp",
        greeting: "Дорогий",
        name: "Паша",
        plural: false
    },
    {
        id: "dalykv",
        greeting: "Дорогий",
        name: "Валєра",
        plural: false
    },
    {
        id: "nikolaenko",
        greeting: "Дорога",
        name: "Віка",
        plural: false
    },
    {
        id: "kovalsky",
        greeting: "Дорога",
        name: "Сім'я Ковальських",
        plural: true
    },
    {
        id: "polishchuk",
        greeting: "Дорога",
        name: "Сім'я Поліщук",
        plural: true
    },
    {
        id: "saidak",
        greeting: "Дорога",
        name: "Сім'я Сайдак",
        plural: true
    },
    {
        id: "yarema",
        greeting: "Дорогий",
        name: "Костя",
        plural: false
    },
    {
        id: "kubovichk",
        greeting: "Дорогі",
        name: "Костя та Катя",
        plural: true
    },
    {
        id: "galibroda",
        greeting: "Дорога",
        name: "Діана",
        plural: false
    },
    {
        id: "kovalchuk",
        greeting: "Дорогі",
        name: "Рома та Юля",
        plural: true
    },
    {
        id: "yavorskiy",
        greeting: "Дорогий",
        name: "Вова",
        plural: false
    },
    {
        id: "sypovich",
        greeting: "Дорогий",
        name: "Сірьога",
        plural: false
    },
    {
        id: "popovich",
        greeting: "Дорогий",
        name: "Рома",
        plural: false
    },
    {
        id: "chalova",
        greeting: "Дорога",
        name: "Оля",
        plural: false
    },
    {
        id: "golyk",
        greeting: "Дорога",
        name: "Сім'я Голюк",
        plural: true
    },
    {
        id: "kojygar",
        greeting: "Дорога",
        name: "Сім'я Кожухар",
        plural: true
    },
    {
        id: "yakimtsev",
        greeting: "Дорогий",
        name: "Саша",
        plural: false
    },
    {
        id: "bezdetnayaolya",
        greeting: "Дорога",
        name: "Оля",
        plural: false
    },
    {
        id: "karpenko",
        greeting: "Дорога",
        name: "Сім'я Карпенко",
        plural: true
    },
    {
        id: "kovalkatya",
        greeting: "Дорога",
        name: "Катя",
        plural: false
    },
    {
        id: "peregonchuk",
        greeting: "Дорогий",
        name: "Сергій",
        plural: false
    },
    {
        id: "terenv",
        greeting: "Дорогий",
        name: "Вадім",
        plural: false
    },
    {
        id: "terena",
        greeting: "Дорогий",
        name: "Артур",
        plural: false
    },
    {
        id: "chaikovsky",
        greeting: "Дорогий",
        name: "Сергій",
        plural: false
    },
    {
        id: "olyabats",
        greeting: "Дорога",
        name: "Оля",
        plural: false
    },
    {
        id: "levischeva",
        greeting: "Дорога",
        name: "Лєна",
        plural: false
    },
    {
        id: "bukshtein",
        greeting: "Дорогий",
        name: "Вітя",
        plural: false
    },
    {
        id: "horbenko",
        greeting: "Дорогий",
        name: "Вова",
        plural: false
    },
    {
        id: "slyshak",
        greeting: "Дорогий",
        name: "Сергій",
        plural: false
    },
    {
        id: "kardash",
        greeting: "Дорогий",
        name: "Вітя",
        plural: false
    },
    {
        id: "lychushyn",
        greeting: "Дорога",
        name: "Сім'я Лучишиних",
        plural: true
    },
    {
        id: "kasya",
        greeting: "Дорога",
        name: "Кася",
        plural: false
    },
    {
        id: "himich",
        greeting: "Дорога",
        name: "Сім'я Хіміч",
        plural: true
    },
    {
        id: "zdrenyk",
        greeting: "Дорога",
        name: "Сім'я Здреник",
        plural: true
    },
    {
        id: "tkachenko",
        greeting: "Дорога",
        name: "Сім'я Ткаченко",
        plural: true
    },
    {
        id: "schehelsky",
        greeting: "Дорога",
        name: "Сім'я Щегельських",
        plural: true
    },
    {
        id: "katedanyluk",
        greeting: "Дорога",
        name: "Сім'я Данилюк",
        plural: true
    },
    {
        id: "zurabovy",
        greeting: "Дорога",
        name: "Сім'я Зурабових",
        plural: true
    },
    {
        id: "kushnir",
        greeting: "Дорога",
        name: "Сім'я Кушнір",
        plural: true
    },
    {
        id: "nimchuk",
        greeting: "Дорога",
        name: "Сім'я Німчук",
        plural: true
    },
    {
        id: "ilnitskaya",
        greeting: "Дорога",
        name: "Крістіна",
        plural: false
    },
    {
        id: "lilyazv",
        greeting: "Дорога",
        name: "Ліля",
        plural: false
    },
    {
        id: "nikazv",
        greeting: "Дорога",
        name: "Вероніка",
        plural: false
    },
    {
        id: "senya",
        greeting: "Дорогий",
        name: "Арсеній",
        plural: false
    },
    {
        id: "filya",
        greeting: "Дорогий",
        name: "Філіп",
        plural: false
    }
]

export default guestList;