export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  photo: string;
  link: string;
  rating: number;
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
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
