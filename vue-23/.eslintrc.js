module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        indent: ["warn", 4],
        quotes: ["off", "double"],
        "comma-dangle": "off",
        "linebreak-style": "off",
        "eol-last": "off",
        "no-trailing-spaces": "off",
        semi: "off"
    },
};
