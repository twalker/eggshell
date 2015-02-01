System.config({
  "paths": {
    "*": "*.js",
    "eggshell/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "transpiler": "6to5"
});

System.config({
  "map": {
    "backbone": "npm:backbone@1.1.2",
    "chai": "npm:chai@1.10.0",
    "jquery": "github:components/jquery@2.1.3",
    "lodash": "npm:lodash@3.0.1",
    "mustache": "github:janl/mustache.js@1.0.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.0.1"
    },
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:backbone@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "underscore": "npm:lodash@3.0.1"
    },
    "npm:buffer@3.0.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:chai@1.10.0": {
      "assertion-error": "npm:assertion-error@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:lodash@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

