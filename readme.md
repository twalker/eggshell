eggshell
========

a starting point for hatching ideas.

------

There are tons of delightful generators and boilerplates out there.
This isn't one of them. It's just a skeleton to work out ideas using
patterns and tools I enjoy.

Because when I want to get crackin' on an idea,
I want to write code instead of reading configuration documentation.

![eggshell](https://raw.github.com/twalker/eggshell/master/public/img/get-crackin.jpg "Get crackin'")

[![Build Status](https://travis-ci.org/twalker/eggshell.png)](https://travis-ci.org/twalker/eggshell)
![Dependencies](https://david-dm.org/twalker/eggshell.png)

------
### install

assuming npm, grunt, and bower are available globally:  
`npm install`  
`bower install`  
`grunt build`  

for server-side debugging and emulating a production environment:  
`npm install -g pm2 node-inspector`  

### run

**server-side**, start the app in one of the following ways:  
`npm start`  
`npm run start-dev` to start with node-inspector debugging.  
`npm run start-prod` to emulate a production environment (uses [pm2](https://github.com/Unitech/pm2)).  

**client-side**:  
`grunt dev` in a separate terminal tab for live-reload goodness.

### test
`npm test` for server-side  
browse to `/client-tests/` for client-side

### build
`grunt build`

### browse

`NODE_ENV=test node app` # to serve individual js requests

`npm start` # to serve concatenated, but not minified js (default)

`npm run start-prod` OR set `NODE_ENV=production` # to serve concatenated and minified js

