console.log("Score 106\n[+]Вёрстка валидная +10\nВ коде странице присутствуют элементы:\n[+]<header>, <main>, <footer> +2\n[+]шесть элементов <section> +2\n[+]только один заголовок <h1> +2\n[+]пять заголовков <h2>  +2\n[+]один элемент <nav> +2\n[+]два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n[ ]десять кнопок <button> +2\n[+]два инпута:  type='email' и  type='tel' +2\n[+]один элемент <textarea> +2\n[+]три атрибута placeholder +2\nВёрстка соответствует макету\n[+]блок <header> +6\n[+]секция hero +6\n[+]секция skills +6\n[+]секция portfolio +6\n[+]секция video +6\n[+]секция price +6\n[+]секция contacts +6\n[+]блок <footer> +6\nТребования к css \n[+]для построения сетки используются флексы +2\n[+]при уменьшении масштаба страницы браузера вёрстка размещается по центру +2\n[+]фоновый цвет тянется на всю ширину страницы +2\n[+]иконки добавлены в формате .svg. +2\n[ ]изображения добавлены в формате .jpg +2\n[+]есть favicon +2\nИнтерактивность, реализуемая через css \n[+]плавная прокрутка по якорям +5\n[+]ссылки в футере ведут на гитхаб и на страницу курса https://rs.school/js-stage0/ +5\n[+]интерактивность +5\n[+]обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5");

const hamburger = document.querySelector('.hamburger');

function toggleMenu() {
  hamburger.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);
