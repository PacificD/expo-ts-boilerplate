/**
 * @Author: Pacific_D
 * @Date: 2022-08-28 18:53:45
 * @LastEditTime: 2022-10-19 21:43:10
 * @LastEditors: Pacific_D
 * @Description: 
 * @FilePath: \expo-ts-boilerplate\babel.config.js
 */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin', ["module-resolver", {
      "alias": {
        "@navigation": "./src/navigation",
        "@components": "./src/components",
        "@screens": "./src/screens",
        "@assets": "./assets"
      },
      "extensions": [
        ".js",
        ".jsx",
        ".ts",
        ".tsx",
      ]
    }]]
  }
}
