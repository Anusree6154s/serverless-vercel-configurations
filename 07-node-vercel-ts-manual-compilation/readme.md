## App: node-vercel in TS with manual compilation

- Runtime/framework: NodeJS, Typescript, ExpressJS
- Deployment: Vercel

## Features

- Using `builds` in vercel.json (cannot use `functions` and `builds` together)
- Using `api` folder

## Method

- Ref:
  - https://stackoverflow.com/a/79421306/17747019
  - https://stackoverflow.com/questions/71900109/deploy-expressts-to-vercel/74475862#74475862
- Compile manually by running `npm install && npm run build`
- Remove `./dist` from `.gitignore`
- Run `vercel` to deploy (or push to github repo that's deployed to vercel)

## To have continuous deployment on vercel
- Vercel project > `Settings` > `Git` > connect github repo
- Vercel project > `Settings` > `Builds and Deployment` > `Root Directory` > add subdirectory name
- Vercel project > `Deployments` > three dots > `Create Deployment` > click on branch name

## Vercel url
- https://serverless-vercel-configurations.vercel.app/
- ![alt text](image.png)
- (check for vercel updates if the website goes down)