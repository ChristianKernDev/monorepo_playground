# Setup

```
cd frontend
npm install

cd app
npm run build
```

Build fails with error message `../common/src/index.ts:1:17 - error TS2307: Cannot find module 'test/a' or its corresponding type declarations.`
in `tsc` run

While a build without `tsc` (`npm run build-no-tsc`) works just fine, as well as the produced application.

`npm start` also creates a server which logs `b-a` to the console as expected.