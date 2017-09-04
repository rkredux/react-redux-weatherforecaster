import axios from "axios"; 
const API_KEY = "af30e78ee912909ecc8b01ef54c54bc1"; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; 

export const FETCH_WEATHER = "FETCH_WEATHER"; 

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`; 
	const request = axios.get(url); 
	console.log(request); //this is a promise object 
	return {
		type: FETCH_WEATHER,
		payload: request //the payload is set to the promise object
	}; 
}