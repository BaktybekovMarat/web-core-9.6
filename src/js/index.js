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
    slidesPerView: 'auto',
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
    slidesPerView: 'auto',
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
    slidesPerView: 'auto',
    spaceBetween: 16,
    breakpoints: {
      767: {
        enabled: false // Отключает Swiper на десктопе
      }
    }
  })
})

//here is the navigation menu open-close button
const showNavigationMenuButton = document.getElementById('button-open-the-menu')
const hideNavigationMenuButton = document.getElementById(
  'button-close-the-menu'
)
const navigationMenu = document.getElementById('side-bar-button')
showNavigationMenuButton.addEventListener('click', showMenu)
hideNavigationMenuButton.addEventListener('click', hideMenu)
window.addEventListener('resize', syncNavigationMenuViewport)
syncNavigationMenuViewport()

function syncNavigationMenuViewport() {
  if (window.innerWidth >= 1120) {
    hideMenu()
  }
}

function showMenu(event) {
  if (window.innerWidth >= 1120) {
    return
  }

  navigationMenu.style.display = 'flex'
  navigationMenu.style.height = 'auto'
  navigationMenu.style.opacity = '1'
  navigationMenu.style.visibility = 'visible'
  navigationMenu.style.overflow = 'visible'
  navigationMenu.style.height = '100dvh'
  navigationMenu.style.overflowY = 'auto'
}

function hideMenu(event) {
  navigationMenu.style.display = 'none'
  navigationMenu.style.height = '0'
  navigationMenu.style.opacity = '0'
  navigationMenu.style.visibility = 'hidden'
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
  hiddenElements.style.opacity = '1'
  hiddenElements.style.overflow = 'visible'

  hideButton.style.height = 'auto'
  hideButton.style.opacity = '1'
  hideButton.style.overflow = 'visible'

  showButton.style.height = '0'
  showButton.style.opacity = '0'
  showButton.style.overflow = 'hidden'
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
const hiddenElement = document.getElementById('second-style-grid-item2--hidden')
const hideBtn = document.getElementById('second-section-hideButton')
const showBtn = document.getElementById('second-section-showButton')

showBtn.addEventListener('click', showElements)
hideBtn.addEventListener('click', hideElements)

function showElements(event) {
  hiddenElement.style.height = 'auto'
  hiddenElement.style.opacity = '1'
  hiddenElement.style.overflow = 'visible'

  showBtn.style.height = '0'
  showBtn.style.opacity = '0'
  showBtn.style.overflow = 'hidden'

  hideBtn.style.height = 'auto'
  hideBtn.style.opacity = '1'
  hideBtn.style.overflow = 'visible'
}

function hideElements(event) {
  hiddenElement.style.height = '0px'
  hiddenElement.style.opacity = '0'
  hiddenElement.style.overflow = 'hidden'

  showBtn.style.height = 'auto'
  showBtn.style.opacity = '1'
  showBtn.style.overflow = 'visible'

  hideBtn.style.opacity = '0'
  hideBtn.style.overflow = 'hidden'
}
