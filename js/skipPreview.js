const nav = document.querySelector('#nav')
const logo = document.querySelector('#logo')
const slogan = document.querySelector('#slogan')
const preview = document.querySelector('#preview')
document.onkeydown = function (e) {
    if (e.code === "Escape"){
        preview.style.cssText = 'animation-name: none; opacity: 0; visibility: hidden;'
        nav.style.cssText = 'animation-name: none; opacity: 1; visibility: visible;'
        logo.style.cssText = 'animation-name: none; opacity: 1; visibility: visible;'
        slogan.style.cssText = 'animation-name: none; opacity: 1; visibility: visible;'
        header.style.cssText = "animation-name: none; border-radius: 0 0 50vh 0;"
    }
}