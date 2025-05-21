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
              <p className="date">
              <FormattedDate date={props.data.date} />
            </p>
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
              <WeatherIcon code={props.data.icon} size={100} />
              </div>
            </div>
      </div>
      <div className="WeatherDescription">
        <p className="text-capitalize">{props.data.description}</p>
      </div>
      <div className="CurrentFeelsLike">
        <p>Feels Like: {props.data.feelslike}°c</p>
      </div>
      </div>
      
      </div>
{/*section that displays sub information for todays weather ie Date, description wind speed etc*/}
      <div className="container">
        <div className="WeatherData">
          <div className="row">
            <div className="col-6">
              <p><span className="emoji">🥵</span><br/> Humidity: {props.data.humidity}%</p>
              <p><span className="emoji">🌡️</span><br/> Pressure: {props.data.pressure} (atm)</p>
            </div>
            <div className="col-6">
              <p><span className="emoji">💨</span><br/> Wind: {props.data.wind} km/h</p>
              <p><span className="emoji">↙️</span><br/> Wind Degree: {props.data.winddegree}°</p>
            </div>
      </div>
      </div>
      </div>
    </div>
    
  );
}