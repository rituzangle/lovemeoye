module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo','@react-native/babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-optional-catch-binding',
      '@babel/plugin-transform-class-properties'
    ]
  }
  };
