import React, { useState} from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from"axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        //remove upon deployment
        setWeatherData({
            ready: true,
            temperature: response.data.temperature.current,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            city: response.data.city,
            condition: response.data.condition.description,
            feelsLike: response.data.temperature.feels_like,
            iconUrl: "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png",
            currentDate: new Date(response.data.time * 1000)
        });
    }


    if (weatherData.ready) {
        return (
        <div className="Weather">
        <form>
            <div className="row mt-3">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
        <li>
            <FormattedDate currentDate={weatherData.currentDate} />
        </li>
        <li className="text-capitalize">{weatherData.condition}</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src={weatherData.iconUrl} alt={weatherData.condition}/>
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
            </div>
            <div className="col-6">
                <ul>
                <li>Feels Like: {Math.round(weatherData.feelsLike)}°C</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind Speed: {weatherData.wind} km/h</li>
                </ul>
            </div>
        </div>
        </div>
    );
    } else {
        const apiKey = "24f16ff06b6aba2369ec3846f0t8bco2";
        let units = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}

    