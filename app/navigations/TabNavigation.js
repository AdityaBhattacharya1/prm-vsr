import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import { AntDesign } from '@expo/vector-icons'
import Home from '../screens/Home'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
	return (
		<Tab.Navigator screenOptions={{ headerShown: false }}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="home" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ color, size }) => (
						<AntDesign name="user" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	)
}
