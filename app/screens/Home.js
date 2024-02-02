import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import globalAPI from '../services/globalAPI'
import { useToast } from 'react-native-toast-notifications'
import { v4 as uuid } from 'uuid'
import Colors from '../shared/Colors'

const Home = () => {
	const [name, setName] = useState('')
	const [details, setDetails] = useState('')

	const toast = useToast()
	const unique_id = uuid()

	const createPatient = () => {
		const data = {
			data: {
				Name: name,
				Details: details,
				patientID: `PN${unique_id.slice(0, 3)}`,
			},
		}

		globalAPI
			.createPatient(data)
			.then((res) => {
				toast.show('Patient added successfully!', {
					type: 'success',
					placement: 'bottom',
					duration: 2000,
				})
				setName('')
				setDetails('')
			})
			.catch((e) => {
				console.error(e)
			})
	}

	return (
		<View style={{ margin: 50, paddingTop: 30 }}>
			<Text
				style={{ fontSize: 35, textAlign: 'center', paddingBottom: 50 }}
			>
				Create Patient
			</Text>
			<TextInput
				placeholder="Name"
				numberOfLines={3}
				onChangeText={(value) => setName(value)}
				value={name}
				onSubmitEditing={() => setName(name)}
				style={{
					width: '100%',
					borderColor: Colors.black,
					borderWidth: 1,
					borderRadius: 15,
					paddingHorizontal: 10,
					marginBottom: 10,
				}}
			/>
			<TextInput
				placeholder="Other Details"
				onChangeText={(value) => setDetails(value)}
				value={details}
				numberOfLines={3}
				style={{
					padding: 10,
					borderRadius: 10,
					borderColor: Colors.black,
					borderWidth: 1,
					textAlignVertical: 'top',
				}}
			/>
			<TouchableOpacity
				style={{
					padding: 13,
					margin: 10,
					borderRadius: 100,
					left: 0,
					right: 0,
					marginBottom: 10,
					zIndex: 20,
					backgroundColor: Colors.primary,
				}}
				onPress={() => createPatient()}
			>
				<Text
					style={{
						color: '#fff',
						textAlign: 'center',
						fontSize: 17,
					}}
				>
					Create Patient Entry
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Home
