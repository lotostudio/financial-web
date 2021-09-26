module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
  ],
  rules: {
    "no-console": 0,
    "space-before-function-paren": [
      "error",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "vue/attribute-hyphenation": [
      "error",
      "never",
      {
        ignore: []
      }
    ],
    "vue/require-prop-types": 0,
    "vue/require-default-prop": 0,
    "no-lonely-if": 0,
    "vue/no-v-html": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
