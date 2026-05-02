# המגדלאור – ליאור מזומן צ'רקס 🌸

אתר לייעוץ הורים, ייעוץ שינה וקבוצות הורים.

## טכנולוגיות

- **React 18** + **Vite**
- **React Router v6** – ניווט בין דפים
- **Tailwind CSS** – עיצוב
- **Lucide React** – אייקונים

## התחלה מהירה

```bash
# 1. התקנת dependencies
npm install

# 2. הרצה בסביבת פיתוח
npm run dev

# 3. בנייה לפרודקשן
npm run build
```

## מבנה הפרויקט

```
src/
├── assets/          # תמונות (לוגו, ליאור, ידיים)
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ContactForm.jsx
│   ├── WhatsAppFloat.jsx
│   └── Ic.jsx       # אייקוני SVG
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   ├── SleepPage.jsx
│   ├── BlogPage.jsx
│   └── ContactPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## דיפלוי ל-GitHub Pages

```bash
# התקן את הכלי
npm install --save-dev gh-pages

# הוסף ל-package.json תחת "scripts":
"deploy": "gh-pages -d dist"

# בנה ועלה
npm run build && npm run deploy
```

## פלטת הצבעים

| משתנה | ערך | שימוש |
|-------|-----|--------|
| `primary` | `#f78da7` | ורוד ראשי |
| `dark`    | `#cf2e2e` | אדום accent |
| `light`   | `#fff0f4` | רקע סקשנים |
| `white`   | `#ffffff` | רקע כללי |
