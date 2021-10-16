module.exports = {
  "env": {
    "browser": true,
    "es2020": true,
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 11,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "warn",

    "no-unused-vars": "off",
    
    "@typescript-eslint/no-unused-vars": ["warn"],
    
    "react/prop-types": "off",
  },
  "globals": {
    "process": false,
  },
};
