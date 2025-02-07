import {ApiFunctionResult} from "../../types/api";
import {WeatherResponse} from "../../types/weather";
import {request} from "../../utils/request";
import {LANGUAGE_CODE, LOCATION, WEATHER_API_TOKEN} from "../../constants/environment";

export const getWeather = async (): Promise<ApiFunctionResult<WeatherResponse>> => {
    const response = await request<WeatherResponse>({
        method: 'GET',
        url: 'https://api.weatherapi.com/v1',
        route: `/current.json?key=${WEATHER_API_TOKEN}&q=${LOCATION}&aqi=no&lang=${LANGUAGE_CODE}`
    });

    if (response.status === 200) {
        return {data: response.data, status: 200};
    }

    return {status: response.status};
};
