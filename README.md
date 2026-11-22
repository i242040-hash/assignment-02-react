# Northstar Studio — Assignment 02

Pirzada Naveeduallah Shah · 24i-2040 · Section B

Fictional Islamabad small-group fitness studio. Browse ten classes, search/filter/sort, inspect details, build a plan, and complete a simulated booking.

Repository: https://github.com/i242040-hash/assignment-02-react
Deployment: **pending URL from student**

## Run

```bash
npm install
npm run dev
npm run build
npm test
```

Routes: `/` home, `/classes` browse, `/classes/:id` details, `/plan` booking, `/confirmation` result. Vite development server supports nested route refresh. Hosting must rewrite unknown paths to `index.html`.

## Rules and edge cases

- One to four places per class, limited further by remaining seats. Quantity rule is in `src/lib/rules.js`; `npm test` runs four Node tests.
- Intermediate classes require the experience checkbox.
- Only Islamabad and Rawalpindi bookings are accepted.
- Use the fixed demo controls to force a loader error or fill Strength Foundations after it has been saved. Retry clears the loader error; remove the conflicting class to continue.
- Search nonsense text to see the no-match state. Open `/classes/invalid-id` for invalid ID handling. Submit empty form fields to inspect specific errors. A plan is saved in local storage and restored on refresh.

No real backend, inventory, payment, email, or reservation is created. Do not enter real customer data in this demonstration.

## Concept map

| Concept | File | Component/function |
|---|---|---|
| Local data and asynchronous loading | `src/data/classes.js` | `classes`, `loadClasses` |
| Routing and shared state | `src/main.jsx` | `App` |
| Search, filter, sort | `src/main.jsx` | `Catalog` |
| Props and callback actions | `src/main.jsx` | `ClassCard`, `Details` |
| Controlled form, derived totals, confirmation | `src/main.jsx` | `Plan`, `Confirmation` |
| Business rules | `src/lib/rules.js` | `quantityRule`, `bookingIssues`, `totalFor` |
| Automated test | `tests/rules.test.js` | Node test runner |
