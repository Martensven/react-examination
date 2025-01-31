import React from "react";

const TimeOfDay = () => {
    const currentHour = new Date().getHours();
    let timeOfDay;

    if (currentHour >= 5 && currentHour < 12) {
        timeOfDay = "God morgon";
    } else if (currentHour >= 12 && currentHour < 18) {
        timeOfDay = "God eftermiddag";
    } else if (currentHour >= 18 && currentHour < 22) {
        timeOfDay = "God kväll";
    } else {
        timeOfDay = "God natt";
    }

    return <>{timeOfDay}</>;
};

export default TimeOfDay;