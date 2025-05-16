import React from "react";
import "./Weather.css";

export default function Weather() {
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city..." className="form-control"/>
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary"/>
                </div>
            </div>
        </form>
        <h1>Canberra</h1>
        <p>Friday 15:00</p>
        <p>Mostly Cloudy</p>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/>
                12°C
            </div>
            <div className="col-6">
                <p>Percipitation: 15%</p>
                <p>Humidity: 72%</p>
                <p>Wind Speed: 13 km/h</p>
            </div>
        </div>
        </div>;
}