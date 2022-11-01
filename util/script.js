const btnNavEl = document.querySelector(".button-navigation-mobile")
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener('click', function () {
    headerEl.classList.toggle('nav-open')
})