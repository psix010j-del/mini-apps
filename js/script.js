// === БАЗА ДАННЫХ УРОКОВ (С ПОЛНЫМИ ОБЪЯСНЕНИЯМИ) ===
const lessons = [
    // ================= HTML =================
    {
        id: 1, type: 'html', title: 'Основы HTML', icon: '🌐', 
        desc: 'Структура страницы, теги head и body.',
        content: `
            <p>HTML (HyperText Markup Language) — это язык разметки, который сообщает браузеру, как отображать контент.</p>
            <h3>Анатомия HTML-документа</h3>
            <p>Любая страница начинается со стандартной структуры:</p>
            <pre>&lt;!DOCTYPE html&gt; <span style="color:#636e72">&lt;!-- Сообщает браузеру тип документа --&gt;</span>
&lt;html lang="ru"&gt;       <span style="color:#636e72">&lt;!-- Корневой элемент --&gt;</span>
  &lt;head&gt;               <span style="color:#636e72">&lt;!-- Служебная информация (не видна на странице) --&gt;</span>
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Моя страница&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;               <span style="color:#636e72">&lt;!-- Видимый контент страницы --&gt;</span>
    &lt;h1&gt;Привет, мир!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
            <p><strong>Head</strong> содержит метаданные, стили и скрипты. <strong>Body</strong> содержит всё, что пользователь видит на экране.</p>`
    },
    {
        id: 2, type: 'html', title: 'Текст и заголовки', icon: '📝', 
        desc: 'Теги h1-h6, p, strong, em.',
        content: `
            <p>Текст — основа веба. Важно использовать правильные теги для семантики.</p>
            <h3>Заголовки</h3>
            <p>Существует 6 уровней заголовков. <code>&lt;h1&gt;</code> — самый важный (обычно один на страницу), <code>&lt;h6&gt;</code> — наименее важный.</p>
            <pre>&lt;h1&gt;Главный заголовок&lt;/h1&gt;
&lt;h2&gt;Подзаголовок раздела&lt;/h2&gt;
&lt;h3&gt;Подраздел&lt;/h3&gt;</pre>
            <h3>Параграфы и форматирование</h3>
            <pre>&lt;p&gt;Это обычный абзац текста.&lt;/p&gt;
&lt;p&gt;Текст может быть &lt;b&gt;жирным&lt;/b&gt; или &lt;i&gt;курсивным&lt;/i&gt;.&lt;/p&gt;
&lt;p&gt;А это &lt;mark&gt;выделенный&lt;/mark&gt; текст.&lt;/p&gt;</pre>`
    },
    {
        id: 3, type: 'html', title: 'Ссылки и Картинки', icon: '🔗', 
        desc: 'Тег a (href) и img (src).',
        content: `
            <p>Интернет состоит из ссылок. Изображения делают его красивым.</p>
            <h3>Ссылки (Anchor)</h3>
            <p>Используется тег <code>&lt;a&gt;</code>. Атрибут <code>href</code> указывает, куда вести ссылку.</p>
            <pre>&lt;a href="https://google.com"&gt;Перейти в Google&lt;/a&gt;
&lt;a href="page2.html"&gt;На другую страницу&lt;/a&gt;
<span style="color:#636e72">&lt;!-- target="_blank" открывает в новой вкладке --&gt;</span>
&lt;a href="..." target="_blank"&gt;Новая вкладка&lt;/a&gt;</pre>
            <h3>Изображения</h3>
            <p>Тег <code>&lt;img&gt;</code> одиночный (не имеет закрывающего тега).</p>
            <pre>&lt;img src="cat.jpg" alt="Милый котик"&gt;</pre>
            <ul>
                <li><strong>src</strong>: путь к файлу картинки.</li>
                <li><strong>alt</strong>: альтернативный текст (если картинка не загрузится или для скринридеров).</li>
            </ul>`
    },
    {
        id: 4, type: 'html', title: 'Списки', icon: '📋', 
        desc: 'Маркированные (ul) и нумерованные (ol).',
        content: `
            <p>Списки используются для меню, перечислений и шагов инструкции.</p>
            <h3>Маркированный список (точки)</h3>
            <pre>&lt;ul&gt;
  &lt;li&gt;Молоко&lt;/li&gt;
  &lt;li&gt;Хлеб&lt;/li&gt;
  &lt;li&gt;Яйца&lt;/li&gt;
&lt;/ul&gt;</pre>
            <h3>Нумерованный список (цифры)</h3>
            <pre>&lt;ol&gt;
  &lt;li&gt;Встать утром&lt;/li&gt;
  &lt;li&gt;Умыться&lt;/li&gt;
  &lt;li&gt;Выпить кофе&lt;/li&gt;
&lt;/ol&gt;</pre>
            <p>Тег <code>&lt;li&gt;</code> (List Item) используется внутри обоих типов списков.</p>`
    },
    {
        id: 5, type: 'html', title: 'Формы', icon: '📥', 
        desc: 'Input, button, form.',
        content: `
            <p>Формы позволяют пользователю отправлять данные на сервер (регистрация, поиск, контакты).</p>
            <h3>Основные элементы</h3>
            <pre>&lt;form action="/submit-data" method="POST"&gt;
  &lt;label for="name"&gt;Ваше имя:&lt;/label&gt;
  &lt;input type="text" id="name" placeholder="Иван"&gt;
  &lt;label for="email"&gt;Email:&lt;/label&gt;
  &lt;input type="email" id="email" required&gt;
  &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;</pre>
            <p><strong>Важные атрибуты:</strong></p>
            <ul>
                <li><code>type</code>: определяет тип поля (text, password, email, checkbox).</li>
                <li><code>placeholder</code>: подсказка внутри поля.</li>
                <li><code>required</code>: поле обязательно для заполнения.</li>
            </ul>`
    },
    {
        id: 6, type: 'html', title: 'Таблицы', icon: '📊', 
        desc: 'table, tr, td.',
        content: `
            <p>Таблицы нужны для отображения структурированных данных (расписание, прайс-лист).</p>
            <pre>&lt;table border="1"&gt;
  &lt;thead&gt; <span style="color:#636e72">&lt;!-- Шапка таблицы --&gt;</span>
    &lt;tr&gt;
      &lt;th&gt;Имя&lt;/th&gt;
      &lt;th&gt;Возраст&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt; <span style="color:#636e72">&lt;!-- Тело таблицы --&gt;</span>
    &lt;tr&gt;
      &lt;td&gt;Алекс&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Мария&lt;/td&gt;
      &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</pre>
            <ul>
                <li><code>&lt;tr&gt;</code> (Table Row) — строка.</li>
                <li><code>&lt;th&gt;</code> (Table Header) — ячейка заголовка (жирная).</li>
                <li><code>&lt;td&gt;</code> (Table Data) — обычная ячейка.</li>
            </ul>`
    },

    // ================= CSS =================
    {
        id: 7, type: 'css', title: 'Подключение CSS', icon: '🎨', 
        desc: 'Способы внедрения стилей.',
        content: `
            <p>CSS (Cascading Style Sheets) отвечает за внешний вид HTML-элементов.</p>
            <h3>Способ 1: Внешний файл (Рекомендуемый)</h3>
            <p>В HTML файле внутри <code>&lt;head&gt;</code>:</p>
            <pre>&lt;link rel="stylesheet" href="style.css"&gt;</pre>
            <h3>Способ 2: Внутренние стили</h3>
            <p>Внутри тега <code>&lt;style&gt;</code> в HTML:</p>
            <pre>&lt;style&gt;
  body { background: white; }
&lt;/style&gt;</pre>
            <h3>Способ 3: Inline (Встроенные)</h3>
            <p>Напрямую в теге (плохая практика для больших проектов):</p>
            <pre>&lt;p style="color: red;"&gt;Текст&lt;/p&gt;</pre>`
    },
    {
        id: 8, type: 'css', title: 'Селекторы', icon: '🎯', 
        desc: 'Классы, ID, теги.',
        content: `
            <p>Селекторы говорят браузеру, <em>к какому элементу</em> применить стиль.</p>
            <h3>Основные типы</h3>
            <pre><span style="color:#636e72">/* По тегу */</span>
p { color: gray; }

<span style="color:#636e72">/* По классу (точка) - можно использовать много раз */</span>
.button { background: blue; }

<span style="color:#636e72">/* По ID (решетка) - только один раз на странице */</span>
#header { height: 60px; }</pre>
            <p>В HTML это выглядит так:</p>
            <pre>&lt;p class="button" id="header"&gt;Текст&lt;/p&gt;</pre>`
    },
    {
        id: 9, type: 'css', title: 'Box Model', icon: '📦', 
        desc: 'Margin, Border, Padding.',
        content: `
            <p>Каждый элемент на странице представляет собой прямоугольную коробку.</p>
            <div style="background: #eee; padding: 20px; border: 2px dashed #ccc; margin-bottom: 10px;">
                <strong>Margin</strong> (внешний отступ) → <strong>Border</strong> (граница) → <strong>Padding</strong> (внутренний отступ) → <strong>Content</strong> (содержимое).
            </div>
            <pre>.box {
  width: 200px;
  padding: 20px;    <span style="color:#636e72">/* Отступ внутри, до границы */</span>
  border: 5px solid black; <span style="color:#636e72">/* Граница */</span>
  margin: 30px;     <span style="color:#636e72">/* Отступ снаружи, от других элементов */</span>
}</pre>
            <p>Совет: используйте <code>box-sizing: border-box;</code>, чтобы padding не увеличивал итоговую ширину элемента.</p>`
    },
    {
        id: 10, type: 'css', title: 'Flexbox', icon: '📏', 
        desc: 'Выравнивание элементов.',
        content: `
            <p>Flexbox — лучший способ расположить элементы в ряд или колонку и выровнять их.</p>
            <h3>Родительский контейнер</h3>
            <pre>.container {
  display: flex;           <span style="color:#636e72">/* Включаем флекс */</span>
  justify-content: center; <span style="color:#636e72">/* По горизонтали */</span>
  align-items: center;     <span style="color:#636e72">/* По вертикали */</span>
  gap: 10px;               <span style="color:#636e72">/* Расстояние между элементами */</span>
}</pre>
            <p>Идеально подходит для навигационных меню, карточек и центрирования блоков.</p>`
    },
    {
        id: 11, type: 'css', title: 'Grid Layout', icon: '🏁', 
        desc: 'Сетки для сложных макетов.',
        content: `
            <p>CSS Grid используется для создания двумерных сеток (строки И колонки одновременно).</p>
            <pre>.grid-container {
  display: grid;
  <span style="color:#636e72">/* Три колонки: первая 100px, остальные делят место поровну */</span>
  grid-template-columns: 100px 1fr 1fr; 
  gap: 20px;
}

.item {
  <span style="color:#636e72">/* Элемент может занимать несколько колонок */</span>
  grid-column: span 2; 
}</pre>
            <p>Grid идеален для общей разметки страницы (шапка, сайдбар, контент, подвал).</p>`
    },
    {
        id: 12, type: 'css', title: 'Анимации', icon: '✨', 
        desc: 'Transition и Keyframes.',
        content: `
            <p>Анимации оживляют интерфейс.</p>
            <h3>Transition (Плавный переход)</h3>
            <p>Используется при наведении (hover).</p>
            <pre>.btn {
  background: blue;
  transition: 0.3s; <span style="color:#636e72">/* Плавность изменения всех свойств */</span>
}
.btn:hover {
  background: red;
  transform: scale(1.1); <span style="color:#636e72">/* Увеличение */</span>
}</pre>
            <h3>@keyframes (Сложная анимация)</h3>
            <pre>@keyframes slide {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}
.box { animation: slide 1s ease-out; }</pre>`
    },

    // ================= JS =================
    {
        id: 13, type: 'js', title: 'Переменные', icon: '📦', 
        desc: 'let, const, var.',
        content: `
            <p>Переменные — это "коробки" для хранения данных.</p>
            <h3>Современный стандарт (ES6+)</h3>
            <pre><span style="color:#636e72">// let - можно менять значение</span>
let age = 25;
age = 26; <span style="color:#636e72">// ОК</span>

<span style="color:#636e72">// const - нельзя менять (константа)</span>
const pi = 3.14;

<span style="color:#636e72">// Типы данных</span>
let name = "Alex";   <span style="color:#636e72">// Строка (String)</span>
let isStudent = true; <span style="color:#636e72">// Логический (Boolean)</span>
let score = 100;      <span style="color:#636e72">// Число (Number)</span></pre>
            <p><strong>Важно:</strong> Забудьте про <code>var</code>, используйте <code>let</code> и <code>const</code>.</p>`
    },
    {
        id: 14, type: 'js', title: 'Функции', icon: '⚙️', 
        desc: 'Стрелочные и обычные.',
        content: `
            <p>Функции — это блоки кода, которые можно вызывать многократно.</p>
            <h3>Обычная функция</h3>
            <pre>function greet(name) {
  return "Привет, " + name;
}</pre>
            <h3>Стрелочная функция (современно)</h3>
            <pre>const greet = (name) => {
  return \`Привет, \${name}\`; <span style="color:#636e72">// Шаблонная строка</span>
};

<span style="color:#636e72">// Если одна строка, скобки можно убрать:</span>
const sum = (a, b) => a + b;</pre>`
    },
    {
        id: 15, type: 'js', title: 'Массивы', icon: '🗄️', 
        desc: 'Списки данных.',
        content: `
            <p>Массив хранит упорядоченный список значений.</p>
            <pre>const fruits = ["Яблоко", "Банан", "Апельсин"];

<span style="color:#636e72">// Доступ по индексу (начинается с 0)</span>
console.log(fruits[0]); <span style="color:#636e72">// "Яблоко"</span>

<span style="color:#636e72">// Добавление элемента</span>
fruits.push("Груша");

<span style="color:#636e72">// Длина массива</span>
console.log(fruits.length); <span style="color:#636e72">// 4</span></pre>
            <p>Массивы часто перебирают циклами (forEach, map, filter).</p>`
    },
    {
        id: 16, type: 'js', title: 'Объекты', icon: '📂', 
        desc: 'Хранение свойств.',
        content: `
            <p>Объекты хранят данные в формате "Ключ: Значение".</p>
            <pre>const user = {
  name: "Максим",
  age: 30,
  isAdmin: false,
  sayHi: function() {
    alert("Привет!");
  }
};

<span style="color:#636e72">// Обращение к свойствам</span>
console.log(user.name); <span style="color:#636e72">// "Максим"</span>
console.log(user["age"]); <span style="color:#636e72">// 30</span>

user.sayHi(); <span style="color:#636e72">// Вызов метода</span></pre>`
    },
    {
        id: 17, type: 'js', title: 'DOM', icon: '🌳', 
        desc: 'Управление HTML через JS.',
        content: `
            <p>DOM (Document Object Model) — это представление вашей HTML-страницы в виде объектов JS.</p>
            <h3>Поиск элементов</h3>
            <pre>const title = document.querySelector("h1");
const btn = document.querySelector(".my-btn");</pre>
            <h3>Изменение содержимого и стилей</h3>
            <pre>title.innerText = "Новый заголовок";
title.style.color = "red";
title.classList.add("active"); <span style="color:#636e72">// Добавить CSS класс</span></pre>
            <p>Так можно создавать, удалять и менять любые элементы на лету.</p>`
    },
    {
        id: 18, type: 'js', title: 'События', icon: '🖱️', 
        desc: 'Клики, ввод, наведение.',
        content: `
            <p>События позволяют реагировать на действия пользователя.</p>
            <pre>const btn = document.querySelector("button");

btn.addEventListener("click", function() {
  alert("Кнопка нажата!");
});

<span style="color:#636e72">// Другие популярные события:</span>
<span style="color:#636e72">// "mouseover" - наведение мыши</span>
<span style="color:#636e72">// "keydown" - нажатие клавиши</span>
<span style="color:#636e72">// "submit" - отправка формы</span></pre>
            <p>Это основа интерактивности любого современного сайта.</p>`
    }
];

// === ГЕНЕРАЦИЯ КАРТОЧЕК ===
const grid = document.getElementById('lessons-grid');

lessons.forEach(lesson => {
    const card = document.createElement('div');
    card.className = `card ${lesson.type}`;
    card.innerHTML = `
        <span class="card-icon">${lesson.icon}</span>
        <h3>${lesson.title}</h3>
        <p>${lesson.desc}</p>
        <div class="card-meta">
            <span>Урок ${lesson.id}</span>
            <span>${lesson.type.toUpperCase()}</span>
        </div>
    `;
    card.onclick = () => openLesson(lesson);
    grid.appendChild(card);
});

// === МОДАЛЬНОЕ ОКНО ===
const modal = document.getElementById('modal');
const mTitle = document.getElementById('modal-title');
const mBody = document.getElementById('modal-body');

function openLesson(lesson) {
    mTitle.innerText = lesson.title;
    mBody.innerHTML = lesson.content;
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// === РЕДАКТОР КОДА ===
function runCode() {
    const code = document.getElementById('code-input').value;
    const iframe = document.getElementById('code-output');
    const doc = iframe.contentWindow.document;
    
    doc.open();
    doc.write(code);
    doc.close();
}

window.onload = runCode;

// === ТЕСТ (QUIZ) ===
const questions = [
    { q: "Какой тег делает текст жирным?", opts: ["&lt;b&gt;", "&lt;bold&gt;", "&lt;br&gt;"], correct: 0, info: "Тег &lt;b&gt; или &lt;strong&gt; делает текст жирным." },
    { q: "Как изменить цвет текста в CSS?", opts: ["text-color: red;", "color: red;", "font-color: red;"], correct: 1, info: "Свойство 'color' отвечает за цвет текста." },
    { q: "Как объявить переменную в современном JS?", opts: ["let myVar;", "variable myVar;", "int myVar;"], correct: 0, info: "Используйте let или const. Они безопаснее старого var." },
    { q: "Что выведет console.log(2 + '2')?", opts: ["4", "22", "Ошибка"], correct: 1, info: "JS склеит число и строку: '22'." },
    { q: "Какой символ используется для ID в CSS?", opts: [". (точка)", "# (решетка)", "@ (собака)"], correct: 1, info: "#id { ... } используется для идентификаторов." },
    { q: "Какой атрибут у ссылки открывает её в новой вкладке?", opts: ["target='_self'", "target='_blank'", "new='true'"], correct: 1, info: "target='_blank' открывает ссылку в новой вкладке." },
    { q: "Что означает padding в CSS?", opts: ["Внешний отступ", "Внутренний отступ", "Граница элемента"], correct: 1, info: "Padding — это внутренний отступ между контентом и границей." },
    { q: "Какое свойство CSS включает Flexbox?", opts: ["position: flex", "display: flex", "flex: true"], correct: 1, info: "display: flex активирует flexbox-контейнер." },
    { q: "С какого номера начинается индексация массива в JS?", opts: ["0", "1", "-1"], correct: 0, info: "Индексация массивов в JS начинается с 0." },
    { q: "Как добавить элемент в конец массива?", opts: ["array.add()", "array.push()", "array.append()"], correct: 1, info: "Метод push() добавляет элемент в конец массива." },
    { q: "Какой тег используется для создания нумерованного списка?", opts: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;"], correct: 1, info: "&lt;ol&gt; (ordered list) создаёт нумерованный список." },
    { q: "Что делает метод querySelector()?", opts: ["Создаёт элемент", "Находит первый подходящий элемент", "Удаляет элемент"], correct: 1, info: "querySelector() находит первый элемент по CSS-селектору." },
    { q: "Какое ключевое слово создаёт константу в JS?", opts: ["let", "const", "static"], correct: 1, info: "const объявляет константу, значение которой нельзя изменить." },
    { q: "Что означает alt у тега img?", opts: ["Альтернативный текст", "Высота картинки", "Ссылка на изображение"], correct: 0, info: "alt — альтернативный текст, если картинка не загрузится." },
    { q: "Какое событие срабатывает при клике на элемент?", opts: ["onMouseOver", "onClick", "onSubmit"], correct: 1, info: "Событие 'click' срабатывает при клике мыши." }
];

let currentQ = 0;
let score = 0;
let selectedOption = null;

function loadQuiz() {
    const q = questions[currentQ];
    document.getElementById('question-count').innerText = `Вопрос ${currentQ + 1} из ${questions.length}`;
    document.getElementById('question-text').innerHTML = q.q;
    
    const list = document.getElementById('options-list');
    list.innerHTML = '';
    selectedOption = null;
    
    document.getElementById('explanation').className = 'explanation';
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('btn-check').style.display = 'inline-block';
    document.getElementById('btn-next').style.display = 'none';

    q.opts.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        div.innerHTML = opt;
        div.onclick = () => selectOpt(index, div);
        list.appendChild(div);
    });
}

function selectOpt(index, el) {
    document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    selectedOption = index;
}

function checkAnswer() {
    if (selectedOption === null) return alert("Выберите вариант!");
    
    const q = questions[currentQ];
    const opts = document.querySelectorAll('.option');
    const expl = document.getElementById('explanation');
    
    opts.forEach(o => o.style.pointerEvents = 'none');
    
    if (selectedOption === q.correct) {
        opts[selectedOption].classList.add('correct');
        score++;
        document.getElementById('score').innerText = `Счет: ${score}`;
        expl.innerHTML = "<strong>Верно!</strong> " + q.info;
        expl.classList.add('show', 'ok');
    } else {
        opts[selectedOption].classList.add('wrong');
        opts[q.correct].classList.add('correct');
        expl.innerHTML = "<strong>Ошибка.</strong> " + q.info;
        expl.classList.add('show', 'err');
    }
    
    document.getElementById('btn-check').style.display = 'none';
    document.getElementById('btn-next').style.display = 'inline-block';
}

function nextQuestion() {
    currentQ++;
    if (currentQ < questions.length) {
        loadQuiz();
    } else {
        document.getElementById('quiz-body').innerHTML = `
            <div style="text-align:center">
                <h2>Тест завершен! 🎉</h2>
                <p>Ваш результат: ${score} из ${questions.length}</p>
                <button class="btn btn-primary" onclick="location.reload()">Начать заново</button>
            </div>
        `;
        document.querySelector('.quiz-footer').style.display = 'none';
        document.querySelector('.quiz-header').style.display = 'none';
    }
}

loadQuiz();