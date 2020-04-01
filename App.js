import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './src/pages/HomeScreen'
import ResultScreen from './src/pages/ResultScreen'

const Stack = createStackNavigator()

export default function App () {
  const headerStyle = {
    headerStyle: {
      backgroundColor: '#5D1D73'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='FoodApp' component={HomeScreen} options={headerStyle} />
        <Stack.Screen name='Result' component={ResultScreen} options={headerStyle} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
