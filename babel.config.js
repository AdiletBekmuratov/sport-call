module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@/assets": "./assets",
            "@/redux": "./src/redux",
            "@/components": "./src/components",
            "@/config": "./src/config",
            "@/screens": "./src/screens",
            "@/stacks": "./src/stacks",
            "@/utils": "./src/utils",
            "@/hooks": "./src/hooks",
            "@/types": "./src/types",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
