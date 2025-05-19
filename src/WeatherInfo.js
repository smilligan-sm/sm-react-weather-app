import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li>
                <FormattedDate currentDate={props.data.currentDate} />
            </li>
            <li className="text-capitalize">{props.data.condition}</li>
            </ul>
        <div className="row">
            <div className="col-6">
                <img src={props.data.iconUrl} alt={props.data.condition}/>
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                 <span className="unit">°C</span>
            </div>
        <div className="col-6">
            <ul>
                <li>Feels Like: {Math.round(props.data.feelsLike)}°C</li>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind Speed: {props.data.wind} km/h</li>
                </ul>
            </div>
        </div>
    </div>
    );

}