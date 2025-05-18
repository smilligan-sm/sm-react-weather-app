import React from "react";

export default function FormattedDate(props) {
    let days = [
        "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
    ];
    let day = days[props.currentDate.getDay()];
    let hours = props.currentDate.getHours();
    if (hours <10) {
        hours = `0${hours}`;
    }
    let minutes = props.currentDate.getMinutes();
    if (minutes <10) {
        minutes = `0${minutes}`;
    }
    
    return (<div>{day} {hours}:{minutes}</div>);
}