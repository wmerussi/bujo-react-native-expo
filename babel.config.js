module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@interfaces': './src/interfaces',
            '@types': './src/types',
          },
          extensions: [".js", ".jsx", ".tsx", ".ts"],
        },
      ],
    ],
  };
};
