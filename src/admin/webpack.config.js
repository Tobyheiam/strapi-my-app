module.exports = (config, webpack) => {
  // Configure a SASS loader
  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
      {
        loader: "sass-loader",
        options: {
          implementation: require("sass"),
        },
      },
    ],
  });
  return config;
};
