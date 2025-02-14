## App: node-vercel in TS with automatic compilation

- Runtime/framework: NodeJS, Typescript, ExpressJS
- Deployment: Vercel

## Features

- Using `builds` in vercel.json (cannot use `functions` and `builds` together)
- Using `api` folder

## Method

- Ref:
  - https://stackoverflow.com/a/79421306/17747019
  - https://stackoverflow.com/questions/79304602/compiling-typescript-in-vercel/79324858#79324858
- Run `vercel` to deploy (or push to github repo that's deployed to vercel)
- Here vercel will read the typescript files directly from src/api/index.ts
