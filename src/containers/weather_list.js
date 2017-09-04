import React, { Component } from "react"; 
import { connect } from "react-redux"; 
import Chart from "../components/chart.js"; 


class WeatherList extends Component{

	renderWeather(cityData){
		const name = cityData.city.name; 
		const temps = cityData.list.map((weather) => weather.main.temp);
		const pressure = cityData.list.map((weather) => weather.main.pressure); 
		const humidity = cityData.list.map((weather) => weather.main.humidity);
		return(
			<tr key={name}>
				<td>{name}</td>	
				<td><Chart color="blue" data={temps} units="K"/></td>
				<td><Chart color="orange" data={pressure} units="hPa"/></td>
				<td><Chart color="green" data={humidity} units="%"/></td>	
			</tr>
		); 
	}


	render(){

		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>

				<tbody>
					{this.props.weather.map((data) => this.renderWeather(data))}
				</tbody>

			</table>
		); 
	}

}


function mapStateToProps({weather}){
	console.log(weather); 
	return { weather }; 
}; 


export default connect(mapStateToProps)(WeatherList); 


