import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY="c8719101d80aa0cec989c0af274b2533";

class App extends React.Component{
  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined,
  }
  getWeather=async(e) => {
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    e.preventDefault();
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`); 
    const data=await api_call.json();//conversion to json format
    if(city && country && data.cod!=="404")
    {
    console.log(data);

    this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:"",
    });
    }
    else
      {
        this.setState({
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description:undefined,
        error:"Please! Enter Valid Credentials!",
    });
      }
  }

  render(){
    return (
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 col-md-5 title-container">
                    <Titles/>
                  </div>
                  <div className="col-xs-7 col-md-7"><br/><br/>
                     <Form getWeather={this.getWeather}/>
                      <Weather 
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}; 
export default App;
          
         