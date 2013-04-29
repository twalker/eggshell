eggshell
========

this branch is an experiment on passing the view as the context to a template:

    this.$el.html(this.template(**this**));
    
The problems I'm trying to solve:

- views need 
  * displayLogic (templateOptions), 
  * formatting helpers, and 
  * model properties
  I have to cobble that shit together in render.

- model properties often need serialized to be useful in the view
    *serialize pattern is ok, but has to support all methods needed by N views

features
- formatting helpers
- direct model access
- template options for display logic


The approaches:
A) render creates a viewmodel from: model.serialize, templateOptions, and invocations.

emphasis is on model (albeit a not very useful one)

pros:
- separation of concerns

cons:
- boated and ugly render methods

B) pass view's **this** as reference to template

emphasis is on view logic

pros
- more flexible
- better separation of model 
- direct relation between view method and template param
- abstracts away template options and model attributes.

cons
- more separation from attributes (could help with accessor: e.g. {{model.name}}
- more methods in view, possibly duplicating some logic
- more work?

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
