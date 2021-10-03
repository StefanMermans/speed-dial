module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
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
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "react-hooks/exhaustive-deps": "warn",

        "react/prop-types": "off",
    },
    "globals": {
        "process": false,
    }
};
