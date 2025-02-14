## App: node-vercel with builds and api folder

- Runtime/framework: Node.js
- Deployment: Vercel

## Features

- Using
  - node
  - vercel
  - `builds` in vercel.json
  - `api` folder
- Remember: cannot use `functions` and `builds` together

## To run

- run `vercel`
- a deployed url will be provided. the website can be viewed there

## To test build

- run `vercel build`

## To test run

- run `vercel dev` (but many production level operations dont happen here, like npm install etc, thus not showing the complete picture of deployment processes)
