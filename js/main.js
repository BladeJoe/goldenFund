document.querySelectorAll('img').forEach(img => img.ondragstart = () => false)

AOS.init()


const menu = document.getElementById("navMenuWrapper")
const allSubmenus = () => menu.querySelectorAll(".nav-menu-inner-wrapper")
let timeoutDuration = window.innerWidth < 1280 ? 3000 : 500

let closeTimeout
let openTimeout
let currentOpenMenuId = null
let trackArea = [menu]

function faqActivate(e) {
    e.currentTarget.classList.toggle("active");
}

window.addEventListener("resize", () => {
    timeoutDuration = window.innerWidth < 1280 ? 3000 : 500

})

document.querySelectorAll(".faq-item").forEach(el =>
    el.addEventListener("click", faqActivate)
)
function initAboutDropdownToggle() {
    const trigger = document.querySelector('.nav-menu-about-dropdown')
    const dropdown = document.querySelector('.nav-menu-about-wrapper')

    if (!trigger || !dropdown) return

    trigger.addEventListener('click', () => {
        dropdown.classList.toggle('hidden')
        menu.classList.add("hidden")
    })
}

initAboutDropdownToggle()

function openNavMenu() {
    menu.classList.toggle("hidden")
    document.querySelector('.nav-menu-about-wrapper').classList.add('hidden')
    if (!menu.dataset.listenerAdded) {
        menu.addEventListener("mouseover", (e) => {
            const targetSpan = e.target.closest("li > span")
            if (targetSpan) {
                menu.classList.remove("hidden")
                const clickedLi = targetSpan.closest("li")
                const submenu = clickedLi?.querySelector(".nav-menu-inner-wrapper")
                if (submenu) {
                    const submenuId = submenu.dataset.menuId || Date.now().toString()
                    submenu.dataset.menuId = submenuId
                    if (submenuId !== currentOpenMenuId) {
                        allSubmenus().forEach(el => el.classList.add("hidden"))
                        submenu.classList.remove("hidden")
                        currentOpenMenuId = submenuId
                    }
                    if (!trackArea.includes(submenu)) trackArea.push(submenu)
                }
            } else {
                clearTimeout(openTimeout)
            }
        })

        menu.addEventListener("click", (e) => {
            const clickedLi = e.target.closest("li")
            const submenu = clickedLi?.querySelector(".nav-menu-inner-wrapper")
            if (e.target.closest("span") && submenu) {
                const submenuId = submenu.dataset.menuId || Date.now().toString()
                submenu.dataset.menuId = submenuId
                if (submenuId !== currentOpenMenuId) {
                    allSubmenus().forEach(el => el.classList.add("hidden"))
                    submenu.classList.remove("hidden")
                    currentOpenMenuId = submenuId
                } else {
                    submenu.classList.toggle("hidden")
                    currentOpenMenuId = submenu.classList.contains("hidden") ? null : submenuId
                }
                if (!trackArea.includes(submenu)) trackArea.push(submenu)
            }
        })

        trackArea.forEach(el => {
            el.addEventListener("mouseover", () => clearTimeout(closeTimeout))
            el.addEventListener("mouseout", (e) => {
                if (!menu.contains(e.relatedTarget)) {
                    clearTimeout(closeTimeout)
                    closeTimeout = setTimeout(() => {
                        menu.classList.add("hidden")
                        allSubmenus().forEach(el => el.classList.add("hidden"))
                        currentOpenMenuId = null
                    }, timeoutDuration)
                }
            })
        })
        setTimeout(() => {
            console.log(trackArea)
        }, 1000);

        menu.dataset.listenerAdded = "true"
    }
}

// searchbar


function openSearchBar() {
    document.querySelector('.nav-container').classList.add('hidden');
    document.querySelector('.nav-search-wrapper').classList.remove('hidden');
}
function closeSearchBar() {
    document.querySelector('.nav-container').classList.remove('hidden');
    document.querySelector('.nav-search-wrapper').classList.add('hidden');
    document.getElementById('nav-search-bar').value = '';

}
function toggleFilter() {
    document.querySelector('#filter').classList.toggle('hidden');
    document.querySelector('.filter-btn').classList.toggle('open');
}

// lenis smooth scroll
function initLenis() {
    if (window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent)) return

    const lenis = new Lenis({
        duration: 1,
        easing: t => 1 - Math.pow(1 - t, 4),
        smoothWheel: true,
        syncTouch: true,
        gestureOrientation: 'vertical',
        touchMultiplier: 1,
        wheelMultiplier: 1,
        autoResize: true,
        smoothTouch: false
    })

    requestAnimationFrame(function raf(t) {
        lenis.raf(t)
        requestAnimationFrame(raf)
    })
}

initLenis()





function initLangDropdown() {
    const dropdown = document.querySelector('.lang-dropdown')
    const selected = dropdown.querySelector('.lang-selected')
    const options = dropdown.querySelectorAll('.lang-options button')

    selected.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            const svg = option.querySelector('img').cloneNode(true)
            const text = option.querySelector('span').textContent

            const oldSvg = selected.querySelector('img')
            selected.replaceChild(svg, oldSvg)

            const oldArrow = selected.querySelector('img[data-arrow]')
            if (oldArrow) oldArrow.remove()

            const arrow = document.createElement('img')
            arrow.src = 'images/arrownextwhite.svg'
            arrow.width = 11
            arrow.classList.add("arrow");
            arrow.height = 11
            arrow.alt = ''
            arrow.setAttribute('data-arrow', 'true')
            selected.appendChild(arrow)
            selected.querySelector('span').textContent = text

            dropdown.classList.remove('open')
            console.log(option.dataset.lang)
        })
    })

    document.addEventListener('click', e => {
        if (!dropdown.contains(e.target)) dropdown.classList.remove('open')
    })
}
initLangDropdown()


function grabNslide() {
    const slider = document.querySelector('.category-wrapper')
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener('mousedown', (e) => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
    })

    slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
    })

    slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
    })

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 1.5
        slider.scrollLeft = scrollLeft - walk
    })

}

if (window.location.pathname === '/members.html') {
    grabNslide()
}


