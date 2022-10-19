/*
 * @Author: Pacific_D
 * @Date: 2022-08-28 18:53:45
 * @LastEditTime: 2022-10-19 21:43:30
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \expo-ts-boilerplate\App.tsx
 */
import React from 'react'
import AppContainer from '@components/app-container'
import { Button, View } from 'react-native'
import {
  createDrawerNavigator,
  DrawerContentComponentProps
} from '@react-navigation/drawer'
import Logo from '@assets/logo.svg'

type DrawerScreenComponent = {
  navigation: DrawerContentComponentProps['navigation']
}

function HomeScreen({ navigation }: DrawerScreenComponent) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Logo />
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  )
}

function NotificationsScreen({ navigation }: DrawerScreenComponent) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <AppContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </AppContainer>
  )
}
