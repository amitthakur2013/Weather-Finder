import React from "react";
import '../App.css';
import 'C:/Users/AMIT/crash-course/weather-api/node_modules/bootstrap/dist/css/bootstrap.min.css';
class Weather extends React.Component {

	render(){
		return(
				<div className="weather__info">
				{this.props.city && this.props.country && <p>Location: {this.props.city},{this.props.country}</p>}
				{this.props.temperature && <p>Temperature: {this.props.temperature} C</p>}
				{this.props.humidity && <p>Humidity: {this.props.humidity} %</p>}
				{this.props.description && <p>Conditions: {this.props.description}</p>}
				{this.props.error && <p className="red_col">{this.props.error}</p>}
				</div>
				
			);
	}
}

export default Weather;
///// {this.props.temperature?
//  					<span> C</span>
//  					:null}