export const root = true;
export const env = {
  node: true,
  browser: true
};
export const extends = [
  "plugin:vue/recommended",
  "eslint:recommended",
  "prettier/vue",
  "plugin:prettier/recommended"
];
export const rules = {
  "vue/component-name-in-template-casing": ["error", "PascalCase"],
  "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
  "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
};
export const globals = {
  $nuxt: true
};
export const parserOptions = {
  parser: "babel-eslint"
};