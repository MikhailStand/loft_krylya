# LOFT Крылья

Многостраничный статический сайт для LOFT «Крылья». Проект подготовлен для публикации на GitHub Pages и последующего импорта страниц в Figma через html.to.design.

## Страницы

- `/` — главная
- `/halls` — залы
- `/events` — форматы мероприятий
- `/prices` — цены и условия
- `/gallery` — галерея
- `/contacts` — контакты и форма заявки

## Локальный запуск

```bash
pnpm install
pnpm dev
```

## Статическая сборка

```bash
pnpm build
```

Готовые файлы создаются в `dist/client`.

## GitHub Pages

Workflow `.github/workflows/deploy-pages.yml` автоматически собирает и публикует сайт при push в ветку `main`.

В репозитории откройте `Settings → Pages` и выберите `GitHub Actions` в качестве источника публикации.

После публикации страницы можно импортировать в Figma отдельными URL:

```text
https://USERNAME.github.io/REPOSITORY/
https://USERNAME.github.io/REPOSITORY/halls/
https://USERNAME.github.io/REPOSITORY/events/
https://USERNAME.github.io/REPOSITORY/prices/
https://USERNAME.github.io/REPOSITORY/gallery/
https://USERNAME.github.io/REPOSITORY/contacts/
```

Цены в текущем прототипе перенесены со старого сайта и требуют подтверждения перед финальной публикацией.
