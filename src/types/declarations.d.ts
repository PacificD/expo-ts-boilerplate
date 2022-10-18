/*
 * @Author: Pacific_D
 * @Date: 2022-10-18 22:42:52
 * @LastEditTime: 2022-10-18 22:42:52
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \expo-ts-boilerplate\src\types\declarations.d.ts
 */
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
