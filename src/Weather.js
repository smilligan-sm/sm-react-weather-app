import React, { useState} from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import axios from"axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
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
            iconUrl: `${response.data.condition.icon_url}`,
            currentDate: new Date(response.data.time * 1000)
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        //search for a city
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }
    function search() {
        const apiKey = "24f16ff06b6aba2369ec3846f0t8bco2";
        let units = "metric";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
        axios.get(apiUrl).then(handleResponse);

    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row mt-3">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100"/>
                </div>
            </div>
        </form>
        <WeatherInfo data={weatherData}/>
        
        </div>
    );
    } else {
      search();
      return "Loading...";
    }
}

    