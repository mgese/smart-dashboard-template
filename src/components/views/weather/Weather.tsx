import React from 'react';
import humidityIcon from "../../../assets/icons/humidity.svg";
import windIcon from "../../../assets/icons/wind.svg";
import {getUVIndexIcon, getWeatherIcon} from "../../../utils/icon";
import './weather.scss';
import {useAppSelector} from "../../../hooks/redux";
import {
    selectConditionCode, selectConditionText,
    selectFeelsLike, selectHumidity,
    selectIsDay,
    selectTemperature,
    selectUVIndex, selectWindSpeed
} from "../../../redux/weather/selectors";

const Weather = () => {
    const conditionText = useAppSelector(selectConditionText)
    const conditionCode = useAppSelector(selectConditionCode)
    const isDay = useAppSelector(selectIsDay)
    const humidity = useAppSelector(selectHumidity);
    const windSpeed = useAppSelector(selectWindSpeed)
    const uvIndex = useAppSelector(selectUVIndex)
    const temperature = useAppSelector(selectTemperature)
    const feelsLike = useAppSelector(selectFeelsLike)

    return (
        <div className="weather">
            <div className="weather__left">
                <div className="weather__left__temerature">
                    <div className="weather__left__temerature__tmp">{temperature}°C</div>
                    <div className="weather__left__temerature__feels-like">Gefühlt wie {feelsLike}°C</div>
                </div>
            </div>
            <div className="weather__middle">
                <img src={getWeatherIcon(conditionCode, isDay)} alt="Weather icon"/>
                <div className="weather__middle__condition">{conditionText}</div>
            </div>
            <div className="weather__right">
                    <div className="weather__right__item">
                        <img src={humidityIcon} alt="Humidity icon"/>
                        <div className="weather__right__item__text">{humidity}%<br/>Luftfeuchtigkeit</div>
                    </div>
                    <div className="weather__right__item">
                        <img src={windIcon} alt="Wind icon"/>
                        <div className="weather__right__item__text">{windSpeed} Km/h <br/> Windgeschwindigkeit</div>
                    </div>
                    <div className="weather__right__empty"/>
                    <div className="weather__right__item">
                        <img src={getUVIndexIcon(uvIndex)} alt="UV-Index icon"/>
                        <div className="weather__right__item__text">{uvIndex} <br/> UV-Index</div>
                    </div>
            </div>
        </div>
    );
}

export default Weather;
