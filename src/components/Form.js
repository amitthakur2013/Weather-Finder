import React from "react";
import 'C:/Users/AMIT/crash-course/weather-api/node_modules/bootstrap/dist/css/bootstrap.min.css';

class Form extends React.Component {
	render(){
		return(
			<form onSubmit={this.props.getWeather}>
				<input type="text" required name="city" placeholder="City..."/>
				<input type="text" required name="country" placeholder="Country..."/>
				<button className="btn btn-danger">Get Weather</button>
			</form>
		);
	}
}
export default Form;
