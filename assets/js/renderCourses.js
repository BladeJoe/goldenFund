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
    }
];

const courseCategories = document.querySelector('.course-categories');
const courseWrapper = document.querySelector('.course-wrapper');

function renderCourses(coursesToRender) {
    courseWrapper.innerHTML = '';

    if (!coursesToRender.length) return;

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
        const div = document.createElement('div');
        div.className = 'course-col';
        div.dataset.key = key;
        div.innerHTML = `${label}`;
        headerWrapper.appendChild(div);
    });
    courseWrapper.appendChild(headerWrapper);

    coursesToRender.forEach(course => {
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
            renderCoursesByCategory(cat);
        };
        li.appendChild(btn);
        ul.appendChild(li);
    });
    courseCategories.appendChild(ul);
}

function renderCoursesByCategory(category) {
    let coursesToDisplay = [];
    if (category === "Все курсы") {
        coursesToDisplay = [...courseData];
    } else {
        coursesToDisplay = courseData.filter(c => c.category === category);
    }
    renderCourses(coursesToDisplay);
}

function setup() {
    renderCategories();
    renderCoursesByCategory("Все курсы");
}

setup();