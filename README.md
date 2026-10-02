# Univer AI — фронтенд-прототип

Прототип веб-приложения по ТЗ «Univer AI: система раннего предупреждения» (ФИТ и ИИ, КазНУ).
Чистый HTML + CSS + JavaScript, без сборки и зависимостей.

## Как запустить
Откройте `index.html` в браузере (двойной клик).
Или через локальный сервер:

    cd univer-ai-frontend
    python3 -m http.server 8000
    # открыть http://localhost:8000

## Структура
- `index.html` — разметка: боковое меню, верхняя панель, контейнер страниц
- `css/styles.css` — стили и 5 скинов (`[data-skin="kaznu" | "night" | "sky" | "farabi" | "snow"]`)
- `js/app.js` — логика:
  - `P`, `ic()` — набор SVG-иконок
  - `L`, `t()` — переводы RU / ҚАЗ
  - `S` — состояние (роль, страница, скин, язык)
  - `ROLES`, `SKINS`, `DISC`, `FEED`, `GROUP`, `PLANS`, `RULES`, `MODELS`, `SCHED` — демо-данные
  - `lineChart()`, `colChart()`, `spark()`, `hbars()`, `ring()`, `donut()` — графики на SVG
  - `PAGES.*` — HTML каждой страницы, `AFTER.*` — обработчики после отрисовки
  - `go(page, role)` — навигация
  - `fireEvent()` — демо-события (имитация уведомлений, не настоящий push)

Все данные вымышлены.
