function initTabs() {
    const tabs = document.querySelectorAll('.tab')
    const contents = document.querySelectorAll('.tab-content')
    const carousel = document.getElementById('carousel')
    const tabsWrapper = document.getElementById('tabWrapper')

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'))
            contents.forEach(c => c.classList.remove('active'))
            tab.classList.add('active')
            contents[index].classList.add('active')
            carousel.style.transform = `translateX(-${index * 25}%)`
            tabsWrapper.style.setProperty('--tab-index', index)
        })
    })

    tabsWrapper.style.setProperty('--tab-index', 0)
}

window.addEventListener('DOMContentLoaded', initTabs)
