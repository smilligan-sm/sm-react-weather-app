import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="Weather-city">
          <div className="row">
            <h1>{props.data.city}</h1>
            <div className="col-6">
              <p><em>{props.data.country}</em></p>
            </div>
            <div className="col-6">
              <div className="date">
              <FormattedDate date={props.data.date} />
              </div>
            </div>
            </div>
      </div>
      <div className="Weather">
      <div className="row">
            <div className="col-6">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
            <div className="col-6">
              <div className="WeatherIcon">
              <WeatherIcon code={props.data.icon} size={130} />
              </div>
            </div>
      </div>
      <div className="WeatherDescription">
        <div className="text-capitalize">{props.data.description}</div>
      </div>
      <div className="CurrentFeelsLike">
        <div>Feels Like: {props.data.feelslike}°c</div>
      </div>
      </div>
      
      </div>
{/*section that displays sub information for todays weather ie Date, description wind speed etc*/}
      <div className="container">
        <div className="WeatherData">
          <div className="row">
            <div className="col-6">
              <span><p className="emoji">🥵</p><br/> Humidity: {props.data.humidity}%</span>
              <span><p className="emoji">🌡️</p><br/> Pressure: {props.data.pressure} (atm)</span>
            </div>
            <div className="col-6">
              <span><p className="emoji">💨</p><br/> Wind: {props.data.wind} km/h</span>
              <span><p className="emoji">↙️</p><br/> Wind Degree: {props.data.winddegree}°</span>
            </div>
      </div>
      </div>
      </div>
    </div>
    
  );
}