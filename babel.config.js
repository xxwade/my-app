module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        "mili"
      ],
    ],
    plugins: [
      "@loadable/babel-plugin",
    ]
  };
};
