import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast-data">
            <div className="row">
                <h2>Forecast</h2>
            </div>
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day"></div>   
                </div>
                <div className="col-5">
                    <div className="WeatherForecast-description"></div>   
                </div>
                <div className="col">
                    <div className="WeatherForecast-icon"></div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-min">Min / </span>
                        <span className="WeatherForecast-temperatures-max">Max</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div>   
                </div>
                <div className="col-5">
                    <div className="WeatherForecast-description">Mostly Cloudy</div>   
                </div>
                <div className="col">
                    <div className="WeatherForecast-icon"><WeatherIcon code="clear-sky-day" size={25}/></div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-min">5°</span>
                        <span className="WeatherForecast-temperatures-max">13°</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Fri</div>   
                </div>
                <div className="col-5">
                    <div className="WeatherForecast-description">Mostly Cloudy</div>   
                </div>
                <div className="col">
                    <div className="WeatherForecast-icon"><WeatherIcon code="clear-sky-day" size={25}/></div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-min">15°</span>
                        <span className="WeatherForecast-temperatures-max">13°</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Sat</div>   
                </div>
                <div className="col-5">
                    <div className="WeatherForecast-description">Mostly Cloudy</div>   
                </div>
                <div className="col">
                    <div className="WeatherForecast-icon"><WeatherIcon code="clear-sky-day" size={25}/></div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-min">5°</span>
                        <span className="WeatherForecast-temperatures-max">13°</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Sun</div>   
                </div>
                <div className="col-5">
                    <div className="WeatherForecast-description">Mostly Cloudy</div>   
                </div>
                <div className="col">
                    <div className="WeatherForecast-icon"><WeatherIcon code="clear-sky-day" size={25}/></div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-min">5°</span>
                        <span className="WeatherForecast-temperatures-max">13°</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Mon</div>   
                </div>
                <div className="col-5">
                    <div className="WeatherForecast-description">Mostly Cloudy</div>   
                </div>
                <div className="col">
                    <div className="WeatherForecast-icon"><WeatherIcon code="clear-sky-day" size={25}/></div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-min">5°</span>
                        <span className="WeatherForecast-temperatures-max">13°</span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Tue</div>   
                </div>
                <div className="col-5">
                    <div className="WeatherForecast-description">Mostly Cloudy</div>   
                </div>
                <div className="col">
                    <div className="WeatherForecast-icon"><WeatherIcon code="clear-sky-day" size={25}/></div>
                </div>
                <div className="col">
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-min">5°</span>
                        <span className="WeatherForecast-temperatures-max">13°</span>
                    </div>
                </div>
            </div>
        </div>

    );
}