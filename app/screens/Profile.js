import { View, Text, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons'
import globalAPI from '../services/globalAPI'
import { useToast } from 'react-native-toast-notifications'

const Profile = () => {
	const [searchText, setSearchText] = useState('')
	const [patientData, setPatientData] = useState(null)

	const toast = useToast()

	const getPatientData = () => {
		globalAPI
			.getPatientByID(searchText)
			.then((res) => {
				setPatientData(res.data.data)
			})
			.catch((e) => {
				toast.show('Error!', {
					type: 'danger',
					placement: 'bottom',
					duration: 2000,
				})
			})
	}

	return (
		<View style={{ margin: 50, paddingTop: 30 }}>
			<Text
				style={{ fontSize: 35, textAlign: 'center', paddingBottom: 10 }}
			>
				Search User
			</Text>
			<View style={{ marginTop: 15 }}>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 5,
						alignItems: 'center',
						borderWidth: 0.7,
						padding: 8,
						borderRadius: 8,
					}}
				>
					<AntDesign name="search1" size={24} color={'#000'} />
					<TextInput
						placeholder="Search"
						onChangeText={(value) => {
							setSearchText(value)
						}}
						value={searchText}
						style={{ width: '100%' }}
						onSubmitEditing={getPatientData(searchText)}
					/>
				</View>
			</View>
			<View>
				{patientData && patientData.length > 0 ? (
					<View
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginTop: 15,
							gap: 10,
						}}
					>
						<AntDesign name="user" size={32} color="black" />
						<Text style={{ fontSize: 20 }}>
							Patient ID: {patientData[0]?.attributes?.patientID}
						</Text>
						<Text style={{ color: '#000' }}>
							Patient Name: {patientData[0]?.attributes?.Name}
						</Text>
						<View
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								gap: 2,
							}}
						>
							<Text
								style={{
									borderBottomColor: '#000',
									borderBottomWidth: 2,
									fontSize: 15,
								}}
							>
								Patient Details
							</Text>
							<Text>{patientData[0]?.attributes?.Details}</Text>
						</View>
					</View>
				) : (
					<View
						style={{
							marginTop: 30,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: 10,
						}}
					>
						<AntDesign name="infocirlceo" size={32} color="black" />
						<Text>Find patients by entering their patient ID</Text>
					</View>
				)}
			</View>
		</View>
	)
}

export default Profile
