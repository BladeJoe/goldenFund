const courseData = [
    {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Веб разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц",
        "category": "Программирование"
    },
    {
        "school": "Netology",
        "price": "120 000 руб",
        "duration": "6 месяцев",
        "level": "Средний",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Python разработчик с нуля",
        "rating": 4.7,
        "discounted_price": "96 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 120,
        "monthly_payment": "от 8 000 руб./месяц",
        "category": "Контент-маркетинг"
    },
    {
        "school": "GeekBrains",
        "price": "150 000 руб",
        "duration": "9 месяцев",
        "level": "Продвинутый",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Fullstack разработчик",
        "rating": 4.6,
        "discounted_price": "135 000 руб",
        "availability": "В любое время",
        "reviews_count": 95,
        "monthly_payment": "от 15 000 руб./месяц",
        "category": "Управление"
    },
    {
        "school": "SkillFactory",
        "price": "90 000 руб",
        "duration": "4 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Аналитик данных",
        "rating": 4.4,
        "discounted_price": "72 000 руб",
        "availability": "В любое время",
        "reviews_count": 70,
        "monthly_payment": "от 6 000 руб./месяц",
        "category": "Маркетинг"
    },
    {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Веб разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц",
        "category": "Программирование"
    },
    {
        "school": "Contented",
        "price": "110 000 руб",
        "duration": "5 месяцев",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Графический дизайнер",
        "rating": 4.8,
        "discounted_price": "88 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 150,
        "monthly_payment": "от 7 333 руб./месяц",
        "category": "Аналитика"
    },
    {
        "school": "Yandex",
        "price": "180 000 руб",
        "duration": "10 месяцев",
        "level": "Средний",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Специалист по Data Science",
        "rating": 4.9,
        "discounted_price": "162 000 руб",
        "availability": "В любое время",
        "reviews_count": 200,
        "monthly_payment": "от 18 000 руб./месяц",
        "category": "Дизайн"
    },
    {
        "school": "Netology",
        "price": "75 000 руб",
        "duration": "2 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Основы интернет маркетинга",
        "rating": 4.3,
        "discounted_price": "60 000 руб",
        "availability": "В любое время",
        "reviews_count": 80,
        "monthly_payment": "от 5 000 руб./месяц",
        "category": "Дизайн"
    },
    {
        "school": "Skillbox",
        "price": "85 000 руб",
        "duration": "3 месяца",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Веб разработчик",
        "rating": 4.5,
        "discounted_price": "66 800 руб",
        "availability": "В любое время",
        "reviews_count": 58,
        "monthly_payment": "от 4 745 руб./месяц",
        "category": "Программирование"
    },
    {
        "school": "Netology",
        "price": "120 000 руб",
        "duration": "6 месяцев",
        "level": "Средний",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Python разработчик с нуля",
        "rating": 4.7,
        "discounted_price": "96 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 120,
        "monthly_payment": "от 8 000 руб./месяц",
        "category": "Контент-маркетинг"
    },
    {
        "school": "GeekBrains",
        "price": "150 000 руб",
        "duration": "9 месяцев",
        "level": "Продвинутый",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Fullstack разработчик",
        "rating": 4.6,
        "discounted_price": "135 000 руб",
        "availability": "В любое время",
        "reviews_count": 95,
        "monthly_payment": "от 15 000 руб./месяц",
        "category": "Управление"
    },
    {
        "school": "SkillFactory",
        "price": "90 000 руб",
        "duration": "4 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Аналитик данных",
        "rating": 4.4,
        "discounted_price": "72 000 руб",
        "availability": "В любое время",
        "reviews_count": 70,
        "monthly_payment": "от 6 000 руб./месяц",
        "category": "Маркетинг"
    },
    {
        "school": "Contented",
        "price": "110 000 руб",
        "duration": "5 месяцев",
        "level": "Начальный",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Графический дизайнер",
        "rating": 4.8,
        "discounted_price": "88 000 руб",
        "availability": "Запуск группы",
        "reviews_count": 150,
        "monthly_payment": "от 7 333 руб./месяц",
        "category": "Аналитика"
    },
    {
        "school": "Yandex",
        "price": "180 000 руб",
        "duration": "10 месяцев",
        "level": "Средний",
        "internship": "Стажировка",
        "diploma": "Диплом",
        "profession": "Специалист по Data Science",
        "rating": 4.9,
        "discounted_price": "162 000 руб",
        "availability": "В любое время",
        "reviews_count": 200,
        "monthly_payment": "от 18 000 руб./месяц",
        "category": "Дизайн"
    },
    {
        "school": "Netology",
        "price": "75 000 руб",
        "duration": "2 месяца",
        "level": "Начальный",
        "internship": "Нет",
        "diploma": "Сертификат",
        "profession": "Основы интернет маркетинга",
        "rating": 4.3,
        "discounted_price": "60 000 руб",
        "availability": "В любое время",
        "reviews_count": 80,
        "monthly_payment": "от 5 000 руб./месяц",
        "category": "Дизайн"
    }
];


const filterbar = document.querySelector('.filterbar');
const courseCategories = document.querySelector('.course-categories');
const courseWrapper = document.querySelector('.course-wrapper');
let currentPage = 1;
const itemsPerPage = 8;
let sortOrder = {};
// parse helpers
const parsePrice = str => Number(str.replace(/[^\d]/g, '')) || 0;
const parseDuration = str => {
    const m = str.match(/\d+/);
    return m ? Number(m[0]) : 0;
};

function renderCourses(courses) {
    courseWrapper.innerHTML = '';
    const info = document.querySelector('.total-courses-info');
    info.innerHTML = courses.length
        ? `<h3>Найдено ${courses.length} курсов</h3>`
        : '<h3>Нет курсов в данной категории.</h3>';
    if (!courses.length) return;

    const headers = [
        { label: "Курс", key: "profession" },
        { label: "Школа", key: "school" },
        { label: "Цена", key: "price" },
        { label: "Длительность", key: "duration" },
        { label: "Особенности", key: "level" },
        { label: "Ссылка на курс", key: "availability" }
    ];

    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'course-header-wrapper';
    headers.forEach(({ label, key }) => {
        const btn = document.createElement('button');
        btn.className = 'course-col';
        btn.dataset.key = key;
        btn.innerHTML = `${label}<span class="sort-arrow"><span class="up"></span><span class="down"></span></span>`;
        btn.addEventListener('click', () => {
            if (sortOrder.key === key) {
                sortOrder.asc = !sortOrder.asc;
            } else {
                sortOrder = { key, asc: true };
            }
            applySortAndFilter();
        });
        headerWrapper.appendChild(btn);
    });
    courseWrapper.appendChild(headerWrapper);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = courses.slice(start, end);

    pageItems.forEach(course => {
        const div = document.createElement('div');
        div.className = 'course-item';
        div.innerHTML = `
            <h4 class="jobtitle">${course.profession}</h4>
            <div class="square-wrapper">
                <div>
                    <p class="inner-title">${course.school}</p>
                    <p class="rating small">⭐ <span>${course.rating}</span></p>
                    <p class="review">Отзывы о школе<span> ${course.reviews_count}</span></p>
                </div>
                <div>
                    <p class="old-price">(${course.price})</p>
                    <p class="current-price">${course.discounted_price.replace(' руб', '')} <span class="currency">руб</span></p>
                    <p class="monthly-price">от <span class="">${course.monthly_payment.replace('от ', '').replace(' руб./месяц', '')}</span> руб/месяц</p>
                </div>
                <div class="time">
                    <img src="./assets/images/clock.svg" width="17" height="17" alt="clock">
                    ${course.availability}
                </div>
                <div class="details">
                    <p class="small"><img src="./assets/images/calendar.svg" width="12" height="12" alt="calendar"> ${course.level}</p>
                    <p class="small"><img src="./assets/images/level.svg" width="12" height="12" alt="level"> ${course.duration}</p>
                    <p class="small"><img src="./assets/images/suitcase.svg" width="12" height="12" alt="suitcase"> ${course.internship}</p>
                    <p class="small"><img src="./assets/images/diploma.svg" width="12" height="12" alt="diploma"> ${course.diploma}</p>
                </div>
            </div>
            <div class="inner-wrapper">
                <button class="btn active">На сайт курса</button>
                <button class="btn">Подробнее</button>
                <a href="#course" class="compare"><img src="./assets/images/compare.svg" width="12" height="12" alt="compare">Добавить к сравнению</a>
            </div>
        `;
        courseWrapper.appendChild(div);
    });

    const paginationWrapper = document.createElement('div');
    paginationWrapper.className = 'pagination-wrapper';
    const totalPages = Math.ceil(courses.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn';
        if (i === currentPage) pageBtn.classList.add('active');
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
            currentPage = i;
            applySortAndFilter();
        };
        paginationWrapper.appendChild(pageBtn);
    }
    courseWrapper.appendChild(paginationWrapper);
}

function renderCategories() {
    courseCategories.innerHTML = '';
    const uniqueCats = ["Все курсы", ...new Set(courseData.map(c => c.category))];
    const ul = document.createElement('ul');
    uniqueCats.forEach((cat, i) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.textContent = cat;
        if (i === 0) btn.classList.add('active');
        btn.onclick = () => {
            document.querySelectorAll('.course-categories button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPage = 1;
            applySortAndFilter();
        };
        li.appendChild(btn);
        ul.appendChild(li);
    });
    courseCategories.appendChild(ul);
}

function renderCheckboxFilter(containerSelector, title, dataKey) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';
    const uniqueItems = [...new Set(courseData.map(c => c[dataKey]))];
    if (!uniqueItems.length) return;
    const header = document.createElement('h3');
    header.className = 'filter-header';
    header.textContent = title;
    container.appendChild(header);
    const ul = document.createElement('ul');
    uniqueItems.forEach(item => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox-reversed');
        checkbox.dataset.filterKey = dataKey;
        label.appendChild(checkbox);
        const span = document.createElement('span');
        span.textContent = item;
        label.appendChild(span);
        li.appendChild(label);
        ul.appendChild(li);
    });
    container.appendChild(ul);
}


function setupPriceSliders() {
    const minSlider = document.getElementById('pricemin');
    const maxSlider = document.getElementById('pricemax');
    const minInput = document.getElementById('priceminVal');
    const maxInput = document.getElementById('pricemaxVal');
    const step = 1000;

    const roundStep = v => Math.round(v / step) * step;

    const syncMin = val => {
        val = roundStep(Math.min(Number(val), Number(maxSlider.value) - step));
        minSlider.value = val;
        minInput.value = val;
    };
    const syncMax = val => {
        val = roundStep(Math.max(Number(val), Number(minSlider.value) + step));
        maxSlider.value = val;
        maxInput.value = val;
    };

    minSlider.oninput = e => syncMin(e.target.value);
    maxSlider.oninput = e => syncMax(e.target.value);
    minInput.oninput = e => syncMin(e.target.value);
    maxInput.oninput = e => syncMax(e.target.value);

    syncMin(minSlider.value);
    syncMax(maxSlider.value);
}

function setupDurationSliders() {
    const minSlider = document.getElementById('durationMin');
    const maxSlider = document.getElementById('durationMax');
    const minInput = document.getElementById('durationMinVal');
    const maxInput = document.getElementById('durationMaxVal');
    const step = 1;

    const roundStep = v => Math.round(v / step) * step;

    const syncMin = val => {
        val = roundStep(Math.min(Number(val), Number(maxSlider.value) - step));
        minSlider.value = val;
        minInput.value = val;
    };
    const syncMax = val => {
        val = roundStep(Math.max(Number(val), Number(minSlider.value) + step));
        maxSlider.value = val;
        maxInput.value = val;
    };

    minSlider.oninput = e => syncMin(e.target.value);
    maxSlider.oninput = e => syncMax(e.target.value);
    minInput.oninput = e => syncMin(e.target.value);
    maxInput.oninput = e => syncMax(e.target.value);

    syncMin(minSlider.value);
    syncMax(maxSlider.value);
}

function getFilters() {
    const category = document.querySelector('.course-categories button.active')?.textContent || "Все курсы";

    const minPrice = parseInt(document.getElementById('priceminVal').value.replace(/\s/g, '')) || 0;
    const maxPrice = parseInt(document.getElementById('pricemaxVal').value.replace(/\s/g, '')) || Infinity;

    const minDuration = parseInt(document.getElementById('durationMinVal').value) || 0;
    const maxDuration = parseInt(document.getElementById('durationMaxVal').value) || Infinity;

    const payment = document.querySelector('input[name="payment"]:checked')?.value || 'all';

    const levelChecked = [...document.querySelectorAll('.level-filter input[type="checkbox"]:checked')].map(i => i.nextSibling.textContent.trim());
    const schoolChecked = [...document.querySelectorAll('.schools-filter input[type="checkbox"]:checked')].map(i => i.nextSibling.textContent.trim());

    const internshipChecked = document.querySelector('input[data-filter="internship"]')?.checked;
    const diplomaChecked = document.querySelector('input[data-filter="diploma"]')?.checked;

    return { category, minPrice, maxPrice, minDuration, maxDuration, payment, levelChecked, schoolChecked, internshipChecked, diplomaChecked };
}

function applySortAndFilter() {
    const {
        category,
        minPrice,
        maxPrice,
        minDuration,
        maxDuration,
        payment,
        levelChecked,
        schoolChecked,
        internshipChecked,
        diplomaChecked
    } = getFilters();

    let filtered = category === "Все курсы" ? [...courseData] : courseData.filter(c => c.category === category);

    filtered = filtered.filter(c => {
        const priceNum = parsePrice(c.discounted_price);
        if (priceNum < minPrice || priceNum > maxPrice) return false;
        if (payment === "paid" && priceNum === 0) return false;
        if (payment === "free" && priceNum > 0) return false;
        if (levelChecked.length && !levelChecked.includes(c.level)) return false;
        if (schoolChecked.length && !schoolChecked.includes(c.school)) return false;
        if (internshipChecked && c.internship.toLowerCase() !== 'стажировка') return false;
        if (diplomaChecked && c.diploma.toLowerCase() !== 'диплом') return false;
        const dur = parseDuration(c.duration);
        if (dur < minDuration || dur > maxDuration) return false;
        return true;
    });

    if (sortOrder.key) {
        filtered.sort((a, b) => {
            let valA = a[sortOrder.key];
            let valB = b[sortOrder.key];

            if (sortOrder.key === 'price' || sortOrder.key === 'discounted_price') {
                valA = parsePrice(valA);
                valB = parsePrice(valB);
            } else if (sortOrder.key === 'duration') {
                valA = parseDuration(valA);
                valB = parseDuration(valB);
            } else if (sortOrder.key === 'rating' || sortOrder.key === 'reviews_count') {
                valA = Number(valA) || 0;
                valB = Number(valB) || 0;
            } else {
                valA = valA.toString().toLowerCase();
                valB = valB.toString().toLowerCase();
            }

            if (valA < valB) return sortOrder.asc ? -1 : 1;
            if (valA > valB) return sortOrder.asc ? 1 : -1;
            return 0;
        });
    }

    renderCourses(filtered);
}

function setupFilterEvents() {
    filterbar.addEventListener('change', () => {
        currentPage = 1;
        applySortAndFilter();
    });
}

function setupPaymentRadioButtons() {
    const radios = document.querySelectorAll('input[name="payment"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            currentPage = 1;
            applySortAndFilter();
        });
    });
}

function setup() {
    renderCategories();
    renderCheckboxFilter('.level-filter', 'Уровень', 'level');
    renderCheckboxFilter('.schools-filter', 'Школы', 'school');
    setupPriceSliders();
    setupDurationSliders();
    setupFilterEvents();
    setupPaymentRadioButtons();
    applySortAndFilter();
}

setup();