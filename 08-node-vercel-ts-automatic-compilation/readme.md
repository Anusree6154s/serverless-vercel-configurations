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

## To have continuous deployment on vercel
- Vercel project > `Settings` > `Git` > connect github repo
- Vercel project > `Settings` > `Builds and Deployment` > `Root Directory` > add subdirectory name
- Vercel project > `Deployments` > three dots > `Create Deployment` > click on branch name

## Vercel url
- https://serverless-vercel-configurations-08.vercel.app/
- ![alt text](image.png)
- (check for vercel updates if the website goes down)