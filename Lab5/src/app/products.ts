import {Category} from "./category";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  link: string;
  rating: number;
  category: Category;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Смартфон Samsung Galaxy S22 Ultra 12 ГБ/256 ГБ черный',
    price: 522746,
    description: `Технология NFC: Да
    цвет: черный
    тип экрана: Dynamic AMOLED 2X, HDR10+, Corning Gorilla Glass Victus+
    диагональ: 6.8 дюйм
    размер оперативной памяти: 12 ГБ
    процессор: 8-ядерный Exynos 2200
    объем встроенной памяти: 256 ГБ
    емкость аккумулятора: 5000 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd9/h1e/48695060561950/samsung-galaxy-s22-ultra-12-256gb-cernyj-podarok-103668309-1.jpg',
    link:
      'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000#!/item',
    rating: 5.0,
    category: {name: 'Смартфоны'},
    likes: 0
  },
  {
    id: 2,
    name: 'Смартфон Apple iPhone 12 Pro Max 128Gb синий',
    price: 666500,
    description: `Технология NFC: Да
    цвет: синий
    тип экрана: сенсорный, мультитач OLED Super Retina XDR
    диагональ: 6.7 дюйм
    размер оперативной памяти: 6 ГБ
    процессор: 6-ядерный Apple A14 Bionic
    объем встроенной памяти: 128 ГБ
    емкость аккумулятора: 3687 мАч`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h8c/32680476966942/apple-iphone-12-pro-max-128gb-sinij-100658112-1-Container.jpg',
    link:
      'https://kaspi.kz/shop/p/apple-iphone-12-pro-max-128gb-sinii-100658112/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Смартфоны'},
    likes: 0
  },
  {
    id: 3,
    name: 'Умная колонка Яндекс Станция 2 синий',
    price: 97770,
    description: `Суммарная мощность: 30 Вт
    управление умным домом: Да
    голосовой помощник: Алиса
    поддерживаемый язык: русский
    поддержка Wi-Fi: Да
    поддержка Bluetooth: Да`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h54/62150441762846/yandeks-stantsiya-2-yndx-00051-sinii-106056866-1.jpg',
    link:
      'https://kaspi.kz/shop/p/jandeks-stantsija-2-sinii-106056866/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Аудио и видео'},
    likes: 0
  },
  {
    id: 4,
    name: 'Тостер CENTEK СТ-1432 черный',
    price: 11143,
    description: `Тип управления: механическое
    количество тостов: 2
    поддон для крошек: Да
    материал корпуса: пластик
    цвет: черный`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hf3/32725893414942/centek-st-1432-cernyj-100295343-1-Container.jpg',
    link:
      'https://kaspi.kz/shop/p/centek-st-1432-chernyi-100295343/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Бытовая техника'},
    likes: 0
  },
  {
    id: 5,
    name: 'Табурет Nika Эконом ТЭ-2, 46.5x32x32 см, слоновая кость',
    price: 3300,
    description: `тип: табурет
    материал: металл
    обивка: искусственная кожа
    жесткость сиденья: средняя
    высота, см: 46.5
    ширина, см: 32
    глубина, см: 32
    цвет: бежевый
    страна: Россия`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/h0f/31820175343646/nika-ekonom-te-2-metall-46-5-smx32-smx32-sm-bezhevyi-16700785-1.jpg',
    link:
      'https://kaspi.kz/shop/p/taburet-nika-ekonom-te-2-46-5x32x32-sm-slonovaja-kost--16700785/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Мебель'},
    likes: 0
  },
  {
    id: 6,
    name: 'Стул N-12, 81x50x25 см, белый',
    price: 7800,
    description: `тип: стул материал: пластик обивка: отсутствует жесткость сиденья: высокая высота, см: 81 ширина, см: 50 глубина, см: 25 цвет: белый страна: Китай`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h07/hdc/32360448491550/stul-klassicheskii-barneo-woodmold-n-12-81x50x25-belyi-100189414-1.jpg',
    link:
      'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Мебель'},
    likes: 0
  },
  {
    id: 7,
    name: 'USB Flash карта Hikvision HS-USB-M200S/64G 64 Гб',
    price: 1790,
    description: `объем памяти: 64 Гб интерфейс: USB 2.0 скорость записи данных: 10 Мбит/с скорость чтения данных: 20 Мбит/с`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h67/hc4/50589959880734/hikvision-hs-usb-m200s-64g-64-gb-104768688-1.jpg',
    link:
      'https://kaspi.kz/shop/p/hikvision-hs-usb-m200s-64g-64-gb-104768688/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Компьютеры и оргтехника'},
    likes: 0
  },
  {
    id: 8,
    name: 'Матрас В Дом и Сад 002, 80x200x10 см, чехол тик',
    price: 9990,
    description: `тип: матрас жесткость стороны 1: средняя пружинный блок: беспружинный наполнитель: вата материал чехла: тик ортопедический: Нет цвет: белый, ,красный страна: Казахстан`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/he0/62698857234462/matras-v-dom-i-sad-002-80x200x10-sm-chekhol-tik-106577484-1.jpg',
    link:
      'https://kaspi.kz/shop/p/matras-v-dom-i-sad-002-80x200x10-sm-chehol-tik-106577484/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Мебель'},
    likes: 0
  },
  {
    id: 9,
    name: 'Herbal Essences Глубокое восстановление Марокканское Аргановое Масло шампунь 400 мл',
    price: 1699,
    description: `действие: увлажнение, ,защита особенности: для ежедневного применения назначение: для женщин тип волос: для всех типов, ,тонкие и поврежденные страна производства: Россия`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h24/h0a/65289788882974/herbal-essences-marokkanskoe-arganovoe-maslo-400-ml-100224196-1.jpg',
    link:
      'https://kaspi.kz/shop/p/herbal-essences-glubokoe-vosstanovlenie-marokkanskoe-arganovoe-maslo-shampun-400-ml-100224196/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Красота и здоровье'},
    likes: 0
  },
  {
    id: 10,
    name: 'Клавиатура Rii mini i8 черный',
    price: 2435,
    description: `тип: оптическая дизайн: мультимедийная назначение: для настольного компьютера тип подключения: беспроводная`,
    photo:
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/h68/47232109346846/rii-mini-i8-cernyj-101174843-1-Container.jpg',
    link:
      'https://kaspi.kz/shop/p/rii-mini-i8-chernyi-101174843/?c=750000000#!/item',
    rating: 5,
    category: {name: 'Компьютеры и оргтехника'},
    likes: 0
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
