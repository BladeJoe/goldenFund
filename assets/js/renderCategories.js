const categoryData = {
    "Программирование": [
        "Все курсы по программированию", "Python-разработка", "Web-разработка", "Мобильная разработка",
        "JavaScript-разработка", "Java-разработка", "Разработка игр", "Создание сайтов",
        "Системное администрирование", "QA-тестирование", "Android-разработка", "Управление разработкой и IT",
        "Frontend-разработка", "Разработка игр на Unity", "Разработка на C#", "PHP-разработка",
        "DevOps", "IOS-разработка", "Верстка на HTML/CSS", "Разработка на C++",
        "Разработка игр на Unreal Engine", "Разработка на Kotlin", "Информационная безопасность",
        "Golang-разработка", "Разработка на Swift", "1C-разработка", "VR/AR разработка", "Фреймворк Laravel"
    ],
    "Маркетинг": ["Digital маркетинг", "Контекстная реклама", "SEO", "Email маркетинг"],
    "Дизайн": ["UX/UI", "Графический дизайн", "Motion дизайн"],
    "Аналитика": ["Data Science", "Бизнес-аналитика", "Power BI", "SQL"],
    "Финансы": ["Финансовая аналитика", "Бухучет", "Инвестиции"],
    "Управление": ["Проектный менеджмент", "HR", "Agile"],
    "Контент-маркетинг": ["Копирайтинг", "SMM", "Продюсирование"]
};

const categoryButtonsContainer = document.getElementById("categoryList");
const subcategoryLinksContainer = document.getElementById("subcategoryList");

function renderCategoryButtons() {
    const categorySelect = document.createElement("select");
    categorySelect.classList.add("categories-select");
    categorySelect.id = "categorySelect";

    Object.keys(categoryData).forEach((category, index) => {
        const button = document.createElement("button");
        button.textContent = category;
        if (index === 0) button.classList.add("active");

        button.addEventListener("click", () => {
            document.querySelectorAll("#categoryList button").forEach(b => b.classList.remove("active"));
            button.classList.add("active");
            renderSubcategoryLinks(categoryData[category]);
            categorySelect.value = category;
        });

        categoryButtonsContainer.appendChild(button);

        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });

    categorySelect.addEventListener("change", () => {
        document.querySelectorAll("#categoryList button").forEach(button => {
            button.classList.toggle("active", button.textContent === categorySelect.value);
        });
        renderSubcategoryLinks(categoryData[categorySelect.value]);
    });

    const label = document.createElement("label");
    label.htmlFor = categorySelect.id;
    label.appendChild(categorySelect);

    categoryButtonsContainer.parentNode.insertBefore(label, categoryButtonsContainer.nextSibling);
}


function renderSubcategoryLinks(subcategories) {
    subcategoryLinksContainer.innerHTML = "";
    subcategories.forEach(subcategory => {
        const link = document.createElement("a");
        link.innerHTML = `${subcategory} <span>&#8250;</span>`;
        link.href = "#";
        subcategoryLinksContainer.appendChild(link);
    });
}

renderCategoryButtons();
renderSubcategoryLinks(categoryData[Object.keys(categoryData)[0]]);
