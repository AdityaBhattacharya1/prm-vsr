import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from 'react-native'
import TabNavigation from './app/navigations/TabNavigation'
import { ToastProvider } from 'react-native-toast-notifications'

export default function App() {
	return (
		<ToastProvider>
			<View style={styles.container}>
				<NavigationContainer>
					<TabNavigation />
				</NavigationContainer>
			</View>
		</ToastProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})
