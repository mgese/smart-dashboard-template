import {UV_INDEX_ICONS, WEATHER_ICONS} from "../constants/icons";

export const getWeatherIcon = (code: string, isDaytime: boolean): string => {
    let weather = WEATHER_ICONS[code];

    if (!weather) {
        weather = WEATHER_ICONS["1000"];
    }
    return isDaytime ? weather.day : weather.night;
}

export const getUVIndexIcon = (uvIndex: number): string => {
    return UV_INDEX_ICONS[uvIndex];
}
