## App: node-vercel with functions and api folder

- Runtime/framework: Node.js
- Deployment: Vercel

## Features

- Using
  - node
  - vercel
  - `functions` in vercel.json
  - `api` folder
- Remember: cannot use `functions` and `builds` together

## To run

- run `vercel`
- a deployed url will be provided. the website can be viewed there

## To test build

- run `vercel build`

## To test run

- run `vercel dev` (but many production level operations dont happen here, like npm install etc, thus not showing the complete picture of deployment processes)

## To have continuous deployment on vercel
- Vercel project > `Settings` > `Git` > connect github repo
- Vercel project > `Settings` > `Builds and Deployment` > `Root Directory` > add subdirectory name
- Vercel project > `Deployments` > three dots > `Create Deployment` > click on branch name

## Vercel url
- https://nodejs-serverless-phi.vercel.app/
- (check for vercel updates if the website goes down)