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

------
### install
`npm install`  
`grunt build`

### run
`npm start` for the site, and `grunt dev` in a second terminal tab for live-reload goodness.

### test
`npm test` for server-side  
browse to `/client-tests/` for client-side

### build
`grunt build`

### browse
`NODE_ENV=test node app` # individual js requests  
`NODE_ENV=development node app` # concatenated, but not minified js (default)  
`NODE_ENV=production node app` # concatenated and minified js  
