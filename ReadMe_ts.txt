Step-by-Step

npm 5.6

node 9.5

npm install -g typescript
 typescript 2.8.3

tsc = typescript compiler

How to generate tsconfig.json?
tsc --init

How to tell the output directory?
tsc --outDir dist      //Eventually add this to tsconfig.json settings

How to automatcically detect change and recompile?
tsc-watch       //Use a webpack server over TSC - so that will automatcically do the same

awesome-typescript-loader package?
awesome-typescript-loader for webpack. This will automatcically pick tsc config.

Globally install webpack?
npm install webpack -g

webpack config - provide devServer port
port: 3000

why to run yarn install?
- it will download dependencies
- it is a little faster

why to run server?
yarn start          //it refers package.json> "start": "webpack-dev-server",
webpack: Compiled successfully. :D

use tslint?
npm install -g tslint

Need to run:
web-pack-dev-server
 
