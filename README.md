# To deploy a react app

npm install gh-pages --save-dev

## package.json

"homepage":"http://LeNganThanh.github.io/React_Final_Project",

"script":{
     "predeploy":"npm run build",
     "deploy":"gh-pages -d build",
}

### `git init`

### `npm run deploy`



