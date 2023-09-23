# NodeJS

* Official & Download: https://nodejs.org
* Documents: https://nodejs.org/api

### Check versions:
```sh
    $ node -v
    $ npm -v
```

### NPM
```sh
    $ npm -h # $ npm help
    $ npm list -h # $ npm help list

    $ npm init -y # create package.json
    $ npm list
    
    $ npm install express # dependencies # package.json/scripts -> "start": "node index.js"
    $ npm i express --save
    
    $ npm i nodemon --save-dev # devDependencies # package.json/scripts -> "devStart": "nodemon index.js"
    # $ npm run devStart # yarn devStart
    # $ npm i nodemon --save-optional # optionalDependencies # package.json/scripts -> "optionalStart": "nodemon index.js"
    
    $ npm install # install all packages (from package.json)
    $ npm i --omit=dev # $ npm i --omit dev # install packages without devDependencies list.

    # GLOBAL
    $ npm --global list 
    $ npm -g list
    $ npm i -g nodemon
    $ nodemon -v

    # NPX
    $ npx create-react-app newfolder # Ctrl+C
```

### NodeShell
```sh
    $ node
    > console.log('Hello World')
    > let moduleName = require("module")
    > moduleName.builtinModules // Show included modules.
    > .exit

```