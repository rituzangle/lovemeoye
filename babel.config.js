module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@react-native/babel-preset'
    ],
    plugins: [
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-optional-catch-binding',
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }]
    ]
  };
};
