module.exports = {
    "env": { "es6": true, "node": true },
    "parserOptions": { "sourceType": "module" },
    "rules": {
        "indent": ["off", 4],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "no-console": ["off"]
    },
    "plugins": [
        "security"
    ],
    "extends": [
        "plugin:security/recommended"
    ]
};