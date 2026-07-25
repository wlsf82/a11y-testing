# a11y-testing

**Banco Simulado** — a small, dependency-free bank app that demonstrates the 6 most common web accessibility bugs, so you can practice finding and fixing them with tools like WAVE, axe DevTools, or a screen reader (NVDA / VoiceOver).

The app ships with **all 6 bugs active by default**. A toggle switches to an accessible version so you can compare the two side by side.

## Running it

No build step and no dependencies. Just open [index.html](index.html) in a browser.

Optionally, serve it locally:

```bash
python3 -m http.server
# then open http://localhost:8000
```

## The 6 bugs demonstrated

Based on the playbook *"Como corrigir os 6 bugs mais comuns de acessibilidade hoje"* by Bruno Pulis.

| # | Bug | Where it appears | WCAG |
| --- | --- | --- | --- |
| 1 | Low-contrast text | Secondary text (`.muted`): light gray on white (~2.5:1) | 1.4.3 (AA) |
| 2 | Image without alt text | Logo (functional), card art (informative), divider (decorative → should be `alt=""`) | 1.1.1 (A) |
| 3 | Form field without label | Transfer form uses `<span>` + placeholder, no `<label for>` | 1.3.1 / 3.3.2 / 4.1.2 (A) |
| 4 | Empty link | Card CTA and social-media icons (icon only, no text/label) | 2.4.4 (A) |
| 5 | Empty button | Notification and menu icon buttons (icon only, no text/label) | 4.1.2 (A) |
| 6 | Missing document language | `<html>` has no `lang` attribute | 3.1.1 (A) |

## Accessible mode

Toggle **"Enable accessible mode"** in the top bar to apply every fix live:

- Raises text contrast to meet WCAG AA.
- Adds descriptive `alt` to informative images and `alt=""` to decorative ones.
- Converts the faux `<span>` labels into real `<label for>` elements.
- Adds `aria-label` to icon buttons and screen-reader-only text to icon links.
- Sets `<html lang>` to the active language.

## Languages

The UI is available in **English**, **Português (BR)**, and **Español**, selectable from the language switcher in the top bar. In accessible mode, the document `lang` and all assistive text update to match the chosen language.

## Layout

- **Desktop:** a single-viewport dashboard — all cards fit with no scrolling.
- **Mobile (≤ 800px):** a stacked single-column layout with normal vertical scrolling.

## Files

- [index.html](index.html) — markup, with each bug flagged in an inline comment.
- [styles.css](styles.css) — styling and responsive layout.
- [script.js](script.js) — the accessible-mode toggle, language switching, and form simulation.

## Disclaimer

Banco Simulado is a fictional demo environment. It is not a real financial institution and performs no real transactions.
