
> [!CAUTION]
> This is a demo of what doesn't work. This code doesn't work

## 03-node-vercel-js-functions-api-with-indexjs(dont work)
- Runtime/framework: Node.js
- Deployment: Vercel

## features
- Using `functions` in vercel.json (cannot use `functions` and `builds` together)
- Without using `api` folder
- This type of configuration where an index.js file exists, but the starting point ids somewhere else wouldnt work because vercel naturally chooses index.js as the starting point.
- One has to remove index.js if their starting file is located somewhere else

## To have continuous deployment on vercel
- Vercel project > `Settings` > `Git` > connect github repo
- Vercel project > `Settings` > `Builds and Deployment` > `Root Directory` > add subdirectory name
- Vercel project > `Deployments` > three dots > `Create Deployment` > click on branch name

## Vercel url
- https://serverless-vercel-configurations-3.vercel.app/
- ![alt text](image.png)
- (check for vercel updates if the website goes down)