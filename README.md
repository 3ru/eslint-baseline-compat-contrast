# Baseline vs compat — Type-aware contrast

This minimal demo shows a case that `eslint-plugin-compat` often misses but `eslint-plugin-baseline-js` (type‑aware) detects:

- A typed instance method: `arr.toSorted()` where `arr: number[]`.
  - `eslint-plugin-baseline-js` uses TypeScript type information to confirm `arr` is an `Array` and flags `toSorted` when the Baseline is set to 2022.
  - `eslint-plugin-compat` can detect `[].toSorted()` (array literal) but generally can’t infer that an arbitrary identifier `arr` is an Array without types, so it usually misses `arr.toSorted()`.

## Install
```bash
npm i
```

## Run (baseline, type‑aware)
```bash
npm run lint:baseline
```
Expected: an error for `arr.toSorted()` from `eslint-plugin-baseline-js`.

Example output:
```sh
baseline-demo-contrast/src/sort.ts
  5:5  error  Feature 'Array by copy' (array-by-copy) became Baseline in 2023 and exceeds 2022  baseline-js/use-baseline

✖ 1 problem (1 error, 0 warnings)
```

If you uncomment the literal case (`[3, 1, 2].toSorted()`), it will also be flagged under the same Baseline policy.

## Run (compat)
```bash
npm run lint:compat
```
Expected: no error for `arr.toSorted()` (identifier receiver). If you uncomment the literal case `[3, 1, 2].toSorted()`, `eslint-plugin-compat` flags that line only (the identifier case remains unflagged).
