System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js",
    "app/*": "src/*.js"
  }
});

System.config({
  "map": {
    "backbone": "npm:backbone@^1.1.2",
    "github:chaijs/chai": "github:chaijs/chai@^1.9.2",
    "github:cjohansen/Sinon.JS": "github:cjohansen/Sinon.JS@^1.10.3",
    "github:jakearchibald/es6-promise": "github:jakearchibald/es6-promise@^1.0.0",
    "jquery": "github:components/jquery@^2.1.1",
    "lodash": "npm:lodash@^2.4.1",
    "mocha": "npm:mocha@^2.0.1",
    "mustache": "github:janl/mustache.js@^0.8.2",
    "text": "github:systemjs/plugin-text@^0.0.2",
    "github:jspm/nodelibs@0.0.5": {
      "inherits": "npm:inherits@^2.0.1",
      "pbkdf2-compat": "npm:pbkdf2-compat@^2.0.1",
      "ripemd160": "npm:ripemd160@^0.2.0",
      "base64-js": "npm:base64-js@^0.0.4",
      "Base64": "npm:Base64@^0.2.0",
      "ieee754": "npm:ieee754@^1.1.1",
      "sha.js": "npm:sha.js@^2.2.6",
      "json": "github:systemjs/plugin-json@^0.1.0"
    },
    "npm:Base64@0.2.1": {},
    "npm:backbone@1.1.2": {
      "underscore": "npm:lodash-node@2.4.1"
    },
    "npm:base64-js@0.0.4": {},
    "npm:commander@0.6.1": {},
    "npm:commander@2.3.0": {},
    "npm:debug@2.0.0": {
      "ms": "npm:ms@0.6.2"
    },
    "npm:diff@1.0.8": {},
    "npm:escape-string-regexp@1.0.2": {},
    "npm:glob@3.2.3": {
      "inherits": "npm:inherits@2",
      "graceful-fs": "npm:graceful-fs@2.0",
      "json": "npm:json@^9.0.1",
      "minimatch": "npm:minimatch@0"
    },
    "npm:graceful-fs@2.0.3": {},
    "npm:growl@1.8.1": {},
    "npm:ieee754@1.1.4": {},
    "npm:inherits@2.0.1": {},
    "npm:jade@0.26.3": {
      "commander": "npm:commander@0.6.1",
      "mkdirp": "npm:mkdirp@0.3.0"
    },
    "npm:json@9.0.2": {},
    "npm:lodash-node@2.4.1": {},
    "npm:lodash@2.4.1": {},
    "npm:lru-cache@2.5.0": {},
    "npm:minimatch@0.4.0": {
      "sigmund": "npm:sigmund@1.0",
      "lru-cache": "npm:lru-cache@2"
    },
    "npm:minimist@0.0.8": {},
    "npm:mkdirp@0.3.0": {},
    "npm:mkdirp@0.5.0": {
      "minimist": "npm:minimist@0.0.8"
    },
    "npm:mocha@2.0.1": {
      "diff": "npm:diff@1.0.8",
      "commander": "npm:commander@2.3.0",
      "debug": "npm:debug@2.0.0",
      "growl": "npm:growl@1.8.1",
      "jade": "npm:jade@0.26.3",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.2",
      "glob": "npm:glob@3.2.3",
      "mkdirp": "npm:mkdirp@0.5.0"
    },
    "npm:ms@0.6.2": {},
    "npm:pbkdf2-compat@2.0.1": {},
    "npm:ripemd160@0.2.0": {},
    "npm:sha.js@2.2.7": {},
    "npm:sigmund@1.0.0": {},
    "npm:underscore@1.7.0": {}
  }
});

System.config({
  "versions": {
    "github:chaijs/chai": "1.10.0",
    "github:cjohansen/Sinon.JS": "1.11.1",
    "github:components/jquery": "2.1.1",
    "github:jakearchibald/es6-promise": "1.0.0",
    "github:janl/mustache.js": "0.8.2",
    "github:jspm/nodelibs": "0.0.5",
    "github:systemjs/plugin-json": "0.1.0",
    "github:systemjs/plugin-text": "0.0.2",
    "npm:Base64": "0.2.1",
    "npm:backbone": "1.1.2",
    "npm:base64-js": "0.0.4",
    "npm:commander": [
      "0.6.1",
      "2.3.0"
    ],
    "npm:debug": "2.0.0",
    "npm:diff": "1.0.8",
    "npm:escape-string-regexp": "1.0.2",
    "npm:glob": "3.2.3",
    "npm:graceful-fs": "2.0.3",
    "npm:growl": "1.8.1",
    "npm:ieee754": "1.1.4",
    "npm:inherits": "2.0.1",
    "npm:jade": "0.26.3",
    "npm:json": "9.0.2",
    "npm:lodash": "2.4.1",
    "npm:lodash-node": "2.4.1",
    "npm:lru-cache": "2.5.0",
    "npm:minimatch": "0.4.0",
    "npm:minimist": "0.0.8",
    "npm:mkdirp": [
      "0.3.0",
      "0.5.0"
    ],
    "npm:mocha": "2.0.1",
    "npm:ms": "0.6.2",
    "npm:pbkdf2-compat": "2.0.1",
    "npm:ripemd160": "0.2.0",
    "npm:sha.js": "2.2.7",
    "npm:sigmund": "1.0.0",
    "npm:underscore": "1.7.0"
  }
});

