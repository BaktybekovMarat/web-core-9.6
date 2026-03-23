import '../scss/style.scss'

console.log('It works!')

const desktopElementsShow = document.querySelectorAll(
  '.desktop-version-elements'
)

function toggleDesktopElements() {
  desktopElementsShow.forEach((el) => {
    if (window.innerWidth > 1119) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })
}

toggleDesktopElements()
window.addEventListener('resize', toggleDesktopElements)
//web-core-8.4

// Ждем загрузки DOM, чтобы скрипт точно увидел все элементы
document.addEventListener('DOMContentLoaded', () => {
  // Инициализация первого свайпера (Ремонт техники различных брендов)
  const swiper = new Swiper('.swiper1', {
    // Указываем твои кастомные классы из HTML
    centeredSlides: true, // центрировать активный слайд
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: { el: '.swiper-pagination1', clickable: true },
    breakpoints: {
      767: {
        enabled: false
      }
    }
  })

  // Инициализация первого свайпера (Ремонт различных видов техники)
  const swiper2 = new Swiper('.swiper2', {
    // Указываем твои кастомные классы из HTML
    centeredSlides: true, // центрировать активный слайд
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: { el: '.swiper-pagination2', clickable: true },
    breakpoints: {
      767: {
        enabled: false
      }
    }
  })

  // Инициализация первого свайпера (Цены и услуги)
  const swiper3 = new Swiper('.swiper3', {
    pagination: { el: '.swiper-pagination3', clickable: true },
    // Включаем свайпер только для мобильн  ых устройств (до 768px)
    centeredSlides: true, // центрировать активный слайд
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      767: {
        enabled: false // Отключает Swiper на десктопе
      }
    }
  })
})

//here is the navigation menu open-close button
const showNavigationMenuButton = document.getElementById('show-the-menu')
const hideNavigationMenuButton = document.getElementById('close-button')
const navigationMenu = document.getElementById('navigation-menu-button')
showNavigationMenuButton.addEventListener('click', showMenu)
hideNavigationMenuButton.addEventListener('click', hideMenu)
function showMenu(event) {

  navigationMenu.style.display = 'block'
  navigationMenu.style.opacity = '1'
  navigationMenu.style.visibility = 'visible'
  navigationMenu.style.height = 'auto'
  navigationMenu.style.overflow = 'visible'
}

function hideMenu(event) {
  navigationMenu.style.display = 'none'
  navigationMenu.style.opacity = '0'
  navigationMenu.style.visibility = 'hidden'
  navigationMenu.style.height = '0'
  navigationMenu.style.overflow = 'hidden'
}

//first section button settings
const showButton = document.getElementById('show-button')
const hideButton = document.getElementById('hide-button')
const hiddenElements = document.getElementById('hidden-elements')

showButton.addEventListener('click', show)
hideButton.addEventListener('click', hide)

function show(event) {
  hiddenElements.style.height = 'auto'
  hiddenElements.style.overflow = 'visible'
  hiddenElements.style.opacity = '1'
  hideButton.style.height = 'auto'
  hideButton.style.overflow = 'visible'
  hideButton.style.opacity = '1'
  showButton.style.height = '0'
  showButton.style.overflow = 'hidden'
  showButton.style.opacity = '0'

}
function hide(event) {
  hiddenElements.style.height = '0'
  hiddenElements.style.overflow = 'hidden'
  hiddenElements.style.opacity = '0'
  hideButton.style.height = '0'
  hideButton.style.overflow = 'hidden'
  hideButton.style.opacity = '0'
  showButton.style.height = 'auto'
  showButton.style.overflow = 'visible'
showButton.style.opacity = '1'
}

//second sections buttons
const hiddenElement = document.getElementById('2nd-section-hidden-elements')
const hideBtn = document.getElementById('2nd-section-hideButton')
const showBtn = document.getElementById('2nd-section-showButton')

showBtn.addEventListener('click', showelements)
hideBtn.addEventListener('click', hideelements)

function showelements(event) {
  hiddenElement.style.height = 'auto'
  hiddenElement.style.overflow = 'visible'
  hiddenElement.style.opacity = '1'
  showBtn.style.overflow = 'hidden'
  showBtn.style.opacity = '0'
  showBtn.style.height = '0'
  hideBtn.style.opacity = '1'
  hideBtn.style.overflow = 'visible'
  hideBtn.style.height = 'auto'
}
function hideelements(event) {
  hiddenElement.style.height = '0px'
  hiddenElement.style.overflow = 'hidden'
  hiddenElement.style.opacity = '0'
  showBtn.style.overflow = 'visible'
  showBtn.style.opacity = '1'
  showBtn.style.height = 'auto'
  hideBtn.style.opacity = '0'
  hideBtn.style.overflow = 'hidden'
}
