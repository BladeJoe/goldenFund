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


// lenis smooth scroll

const lenis = new Lenis({
    duration: 1,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: true,
    gestureOrientation: 'vertical',
    touchMultiplier: 2,
    wheelMultiplier: 1.2,
    autoResize: true,
    lerp: 0.1,
    smoothTouch: false,
});
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



