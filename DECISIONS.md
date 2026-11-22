# Frontend decisions

These are design responses to the reference-site observations documented in the report. Consequences are plausible, not measured.

| Problem | Decision | Alternative | Reason | Tradeoff | Code location | Improvement evidence |
|---|---|---|---|---|---|---|
| Class details and comparison information are scattered across general marketing pages | Put level, duration, time, price, and remaining places on each class card, with full conditions on details | A compact list with only names and photos | Users can compare before opening details on mobile | Cards use more screen height | `src/main.jsx`, `ClassCard`, `Details` | Search for Yoga and inspect both cards; details retain all facts. |
| A general booking/contact flow does not expose live capacity before a user begins | Show available places on cards and enforce capacity and four-place maximum during selection | Reveal availability only during final review | Saves users from planning unavailable sessions | Requires synchronization of every selection with data | `src/main.jsx`, `ClassCard`, `Plan`; `src/lib/rules.js`, `quantityRule` | Use “Fill Strength Foundations” demo control after adding a place; review conflict in plan. |
| Broad contact forms do not give a class-specific price and eligibility review | Keep a persistent plan, show calculated totals, and give field-specific errors without clearing entered values | Single-step generic inquiry | Users can correct a booking and understand its total before confirmation | More client-side state and validation | `src/main.jsx`, `Plan`; `src/lib/rules.js`, `bookingIssues` | Submit an intermediate class without experience; see specific error and preserved fields. |
