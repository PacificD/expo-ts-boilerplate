/**
 * @Author: Pacific_D
 * @Date: 2022-10-18 22:42:40
 * @LastEditTime: 2022-10-18 22:42:41
 * @LastEditors: Pacific_D
 * @Description: 
 * @FilePath: \expo-ts-boilerplate\metro.config.js
 */
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();