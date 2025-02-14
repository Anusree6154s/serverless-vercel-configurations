## node-vercel-4
- Runtime/framework: Node.js
- Deployment: Vercel

## features
- Using `functions` in vercel.json (cannot use `functions` and `builds` together)
- Without using `api` folder
- This type of configuration where an index.js file exists, but the starting point ids somewhere else wouldnt work because vercel naturally chooses index.js as the starting point.
- One has to remove index.js if their starting file is located somewhere else