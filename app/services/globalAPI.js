import axios from 'axios'

const BASE_URL = `${process.env.EXPO_PUBLIC_API_URL}/api`
const API_KEY = process.env.EXPO_PUBLIC_API_KEY

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
})

const createPatient = (data) => axiosInstance.post('/patients', data)

const getPatientByID = (id) =>
	axiosInstance.get(`/patients?filters[patientID][$eq]=${id}&populate=*`)

export default {
	createPatient,
	getPatientByID,
}
