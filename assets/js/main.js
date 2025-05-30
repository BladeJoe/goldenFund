document.querySelectorAll('img').forEach(img => img.ondragstart = () => false)

AOS.init()

const menu = document.getElementById("navMenuWrapper")
const allSubmenus = () => menu.querySelectorAll(".nav-menu-inner-wrapper")
let timeoutDuration = window.innerWidth < 1280 ? 100000 : 500

let closeTimeout
let openTimeout
let currentOpenMenuId = null
let trackArea = [menu]

function faqActivate(e) {
    const item = e.currentTarget;
    item.classList.toggle("active");
    [...item.children].forEach(child => {
        child.classList.toggle("active");
        [...child.children].forEach(grandchild => grandchild.classList.toggle("active"));
    });
}

window.addEventListener("resize", () => {
    timeoutDuration = window.innerWidth < 1280 ? 100000 : 500

})

document.querySelectorAll(".faq-item").forEach(el =>
    el.addEventListener("click", faqActivate)
)

function openNavMenu() {
    menu.classList.toggle("hidden")

    if (!menu.dataset.listenerAdded) {
        menu.addEventListener("mouseover", (e) => {
            const targetSpan = e.target.closest("li > span")
            if (targetSpan) {
                clearTimeout(openTimeout)
                openTimeout = setTimeout(() => {
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
                }, 20)
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
