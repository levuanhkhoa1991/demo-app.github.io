# Quick Order (React Native - Expo)

Mobile-screen demo for product search and quick order implemented using **Expo + React Native**.

## Quick start

Requirements: Node 16+, npm, optionally Expo CLI (not required if using `npx`).

Install dependencies once:

```bash
cd test01/quick-order-app
npm install
```

Start the app (Expo):

```bash
npm start
# or with npx
npx expo start
```

Then open the project in Expo Go on your device or run on emulator (iOS/Android) from the Expo UI.

Run unit tests:

```bash
npm test
```

## What I implemented

- Product list with `Rx` badge for prescription items
- Search (case-insensitive) + category filter (All / Pain Relief / Antibiotic / Supplement / Allergy / Gastro)
- Debounced search (300ms)
- Quantity controls per product (+ / -) with bounds 0..99 (items removed when qty = 0)
- Totals: number of SKUs, total quantity, total amount (VND)
- Empty state when search/filter returns no results
- Cart persisted to device storage (`AsyncStorage`)
- Unit tests for cart logic and pure cart ops
- Proper separation: `src/components` (UI), `src/hooks` (state), `src/lib` (pure utils)

## Project layout

- `src/components` — UI components (`SearchBar`, `ProductItem`, `CartSummary`, `Icon`)
- `src/hooks` — `useCart` (persistence + inc/dec), `useDebounce`
- `src/lib` — `cartUtils` (totals), `cartOps` (pure ops)
- `src/data/products.json` — sample dataset

## Manual QA checklist (what to verify)

1. App launches on device/emulator and shows product list.
2. Products display name, category, price. Items with `isPrescription: true` show `Rx` badge.
3. Search bar filters by name case-insensitively. Typing should be debounced ~300ms.
4. Category filter buttons filter correctly.
5. `+` and `-` buttons update quantity; quantities stay within 0..99 and items with qty=0 are removed.
6. Summary shows correct SKUs, total qty, total amount.
7. Empty state shown when no products match filter/search.
8. Cart persists after app reload (close app and reopen) via `AsyncStorage`.
9. Rapid tapping or empty data does not crash app.

## Tests

- Unit tests are under `src/__tests__` and can be run with `npm test`. Tests verify `calcTotals` and cart operations.

## Trade-offs & improvements

- Trade-offs made for speed: simple styling, emoji icons, and minimal accessibility improvements.
- Improvements if more time: add TypeScript, better error boundaries, e2e tests (Detox/Cypress), keyboard accessibility, product images and virtualization for large lists, more robust AsyncStorage error handling and retry logic.

## Packaging for submission

To create a zip of the app folder to submit:

```bash
cd test01
zip -r quick-order-app-submission.zip quick-order-app
```

If you want, I can produce that zip here and include final verification notes.

---

If you want me to run the Expo server now and record manual QA results, tell me and I'll start it and report observations.
