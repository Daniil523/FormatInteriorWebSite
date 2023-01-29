const header = document.querySelector('#header')
const burger = document.querySelector('#burger')

burger.onclick = () => {
    document.querySelector('.header__nav').classList.toggle('active')
    document.querySelector('body').classList.toggle('lock')
    burger.classList.toggle('active')
}