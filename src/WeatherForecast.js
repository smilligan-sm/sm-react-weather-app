import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState();

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast-data">
                <div className="row">
                    <h2>Forecast</h2>
                </div>
                <div className="WeatherForecastResultsRows">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day"></div>   
                    </div>
                    <div className="col-5">
                        <div className="WeatherForecast-description"></div>   
                    </div>
                    <div className="col">
                        <div className="WeatherForecast-temperatures">
                            <span className="WeatherForecast-temperatures-min">Min / </span>
                            <span className="WeatherForecast-temperatures-max">Max</span>
                        </div>
                    </div>
                        {forecast.map(function(dailyForecast, index) {
                            if (index > 0) {
                                return (
                                    <div><WeatherForecastDay data={dailyForecast} />
                                    </div>
                                );   
                            }                                        
                    })}
                </div>
                </div>
            </div>
    );
    } else {
        let apiKey = "24f16ff06b6aba2369ec3846f0t8bco2";
        let city = props.city;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        return null;
        
    }  
}