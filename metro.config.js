const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
resolver: {
  sourceExts: ['js', 'json', 'ts', 'tsx', 'jsx']
}

module.exports = config;