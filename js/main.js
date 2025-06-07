document.querySelectorAll('img').forEach(img => img.ondragstart = () => false)

AOS.init()

const menu = document.getElementById("navMenuWrapper")
const allSubmenus = () => menu.querySelectorAll(".nav-menu-inner-wrapper")
let timeoutDuration = window.innerWidth < 1280 ? 3000 : 500

let closeTimeout
let openTimeout
let currentOpenMenuId = null
let trackArea = [menu]


window.addEventListener("resize", () => {
    timeoutDuration = window.innerWidth < 1280 ? 3000 : 500

})

document.querySelectorAll(".faq-item").forEach(el => el.addEventListener("click", e => e.currentTarget.classList.toggle("active")))


function initAboutDropdownToggle() {
    const trigger = document.querySelector('.nav-menu-about-dropdown')
    const dropdown = document.querySelector('.nav-menu-about-wrapper')
    if (!trigger || !dropdown) return

    const closeDropdown = () => {
        dropdown.classList.add('hidden')
        document.removeEventListener('click', outsideClickListener)
    }

    const outsideClickListener = e => {
        if (!trigger.contains(e.target) && !dropdown.contains(e.target)) {
            closeDropdown()
        }
    }

    trigger.addEventListener('click', e => {
        e.stopPropagation()
        const isHidden = dropdown.classList.contains('hidden')
        dropdown.classList.toggle('hidden')
        menu.classList.add("hidden")
        if (isHidden) {
            setTimeout(() => document.addEventListener('click', outsideClickListener), 0)
        } else {
            document.removeEventListener('click', outsideClickListener)
        }
    })
}
initAboutDropdownToggle()



function openNavMenu() {
    menu.classList.toggle("hidden")
    document.querySelector('.nav-menu-about-wrapper').classList.add('hidden')

    const isHidden = menu.classList.contains("hidden")

    const outsideClickListener = e => {
        if (!menu.contains(e.target)) {
            menu.classList.add("hidden")
            allSubmenus().forEach(el => el.classList.add("hidden"))
            currentOpenMenuId = null
            document.removeEventListener("click", outsideClickListener)
        }
    }

    if (!isHidden) {
        setTimeout(() => document.addEventListener("click", outsideClickListener), 0)
    }

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

//filter toggle
function toggleFilter() {
    document.querySelector('#filter').classList.toggle('hidden');
    document.querySelector('.filter-btn').classList.toggle('open');
}

// lenis smooth scroll
function initLenis() {
    // if (window.innerWidth < 1024 || /Mobi|Android/i.test(navigator.userAgent)) return
    const lenis = new Lenis({
        duration: 0.75,
        easing: (t) => 1 - Math.pow(1 - t, 8),
        smooth: true,
        smoothTouch: true,
    });

    // To make Lenis work, you also need to call its update method in your animation loop
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
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

// category slider , members page


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






// news border management


function manageNewsBorders() {
    window.addEventListener('resize', applyBorders);
    document.addEventListener('DOMContentLoaded', applyBorders);

    function applyBorders() {
        const cards = [...document.querySelectorAll('.newscard')];
        const wrapper = document.querySelector('.newscard-wrapper');
        const wrapperWidth = wrapper.offsetWidth;
        const cardWidth = 533;
        const columns = Math.floor(wrapperWidth / cardWidth);
        const rows = Math.ceil(cards.length / columns);

        cards.forEach((card, index) => {
            card.style.border = 'none';

            const isLastCard = index === cards.length - 1;
            const isLastColumn = (index + 1) % columns === 0;
            const isLastRow = index >= (rows - 1) * columns;

            if (!isLastColumn && !isLastCard) {
                card.style.borderRight = '1px solid #D3D8E3';
            }

            if (!isLastRow) {
                card.style.borderBottom = '1px solid #D3D8E3';
            }
        });
    }
}
if (window.location.pathname === '/news.html' || window.location.pathname === '/index.html') {
    manageNewsBorders()
}


//slider  const track = document.querySelector('.carousel-track')
function initSlider() {
    const track = document.querySelector('.carousel-track')
    const images = document.querySelectorAll('.carousel-track img')
    const lineContainer = document.querySelector('.carousel-lines')
    let index = 0, startX = 0, currentTranslate = 0, prevTranslate = 0, dragging = false

    track.style.width = `${images.length * 100}%`
    images.forEach(img => {
        img.style.width = `${100 / images.length}%`
    })

    images.forEach((_, i) => {
        const line = document.createElement('div')
        line.addEventListener('click', () => {
            index = i
            setPositionByIndex()
        })
        lineContainer.appendChild(line)
    })

    const lines = document.querySelectorAll('.carousel-lines div')
    lines[index].classList.add('active')

    track.addEventListener('mousedown', startDrag)
    track.addEventListener('touchstart', startDrag)
    track.addEventListener('mousemove', drag)
    track.addEventListener('touchmove', drag)
    track.addEventListener('mouseup', endDrag)
    track.addEventListener('mouseleave', endDrag)
    track.addEventListener('touchend', endDrag)

    function startDrag(e) {
        dragging = true
        startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
        track.style.transition = 'none'
        e.preventDefault()
    }

    function drag(e) {
        if (!dragging) return
        const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
        const delta = currentX - startX
        currentTranslate = prevTranslate + delta
        track.style.transform = `translateX(${currentTranslate}px)`
        e.preventDefault()
    }

    function endDrag(e) {
        if (!dragging) return
        dragging = false
        const endX = e.type.includes('touch') ? (e.changedTouches[0]?.clientX ?? startX) : e.clientX
        const moved = endX - startX
        track.style.transition = 'transform 0.3s ease'
        if (moved < -50 && index < images.length - 1) index++
        if (moved > 50 && index > 0) index--
        setPositionByIndex()
    }

    function setPositionByIndex() {
        currentTranslate = -index * (track.clientWidth / images.length)
        prevTranslate = currentTranslate
        track.style.transform = `translateX(${currentTranslate}px)`
        lines.forEach(line => line.classList.remove('active'))
        lines[index].classList.add('active')
    }
}
if (window.location.pathname === '/meeting.html') {
    initSlider()
}