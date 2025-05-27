const track = document.querySelector('.carousel-track')
const slides = document.querySelectorAll('.carousel-slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const pagination = document.querySelector('.pagination')

let index = 0
let autoSlide
let dots = []
let prevVisibleSlides = 0

const getSlideWidth = () => window.innerWidth <= 928 ? 315 : 287

const getVisibleSlides = () => {
    if (window.innerWidth <= 959) return 1
    if (window.innerWidth <= 1024) return 2
    if (window.innerWidth <= 1280) return 3
    return 4
}

const createPagination = () => {
    pagination.innerHTML = ''
    const visible = getVisibleSlides()
    const total = Math.max(1, slides.length - visible + 1)
    dots = []
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div')
        dot.classList.add(`page-${i + 1}`)
        dot.onclick = () => {
            index = i
            resetAutoSlide()
            updateCarousel()
        }
        pagination.appendChild(dot)
        dots.push(dot)
    }
}

const updateCarousel = () => {
    const width = getSlideWidth()
    const visible = getVisibleSlides()
    const max = slides.length - visible
    if (index > max) index = 0
    if (index < 0) index = max
    track.style.transform = `translateX(-${index * (width + 16)}px)`
    dots.forEach(dot => dot.classList.remove('active'))
    dots[index]?.classList.add('active')
}

const resetAutoSlide = () => {
    clearInterval(autoSlide)
    autoSlide = setInterval(() => {
        index++
        updateCarousel()
    }, 3000)
}

const handleResize = () => {
    const current = getVisibleSlides()
    if (current !== prevVisibleSlides) {
        prevVisibleSlides = current
        createPagination()
    }
    updateCarousel()
}

const movePrev = () => {
    index--
    resetAutoSlide()
    updateCarousel()
}

const moveNext = () => {
    index++
    resetAutoSlide()
    updateCarousel()
}

prev.onclick = movePrev
next.onclick = moveNext
window.addEventListener('resize', handleResize)

prevVisibleSlides = getVisibleSlides()
createPagination()
updateCarousel()
resetAutoSlide()
