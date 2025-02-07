import {IWeather, WeatherResponse} from "../types/weather";

export const transformWeatherResponse = (response: WeatherResponse): IWeather  =>{
    return {
        humidity: Math.round(response.current.humidity),
        windSpeed: Math.round(response.current.wind_kph),
        uvIndex: Math.ceil(response.current.uv),
        temperature: Math.round(response.current.temp_c),
        feelsLike: Math.round(response.current.feelslike_c),
        conditionText: response.current.condition.text,
        conditionCode: response.current.condition.code.toString(),
        isDay: response.current.is_day === 1,
    };
}
