import clearDay from "../assets/icons/clear-day.svg";
import clearNight from "../assets/icons/clear-night.svg";
import partlyCloudyDay from "../assets/icons/partly-cloudy-day.svg";
import partlyCloudyNight from "../assets/icons/partly-cloudy-night.svg";
import cloudy from "../assets/icons/cloudy.svg";
import overcastDay from "../assets/icons/overcast-day.svg";
import overcastNight from "../assets/icons/overcast-night.svg";
import mist from "../assets/icons/mist.svg";
import drizzle from "../assets/icons/drizzle.svg";
import rain from "../assets/icons/rain.svg";
import snow from "../assets/icons/snow.svg";
import thunderstormsDay from "../assets/icons/thunderstorms-day.svg";
import thunderstormsNight from "../assets/icons/thunderstorms-night.svg";
import thunderstormsDayRain from "../assets/icons/thunderstorms-day-rain.svg";
import thunderstormsNightRain from "../assets/icons/thunderstorms-night-rain.svg";
import thunderstormsDaySnow from "../assets/icons/thunderstorms-day-snow.svg";
import thunderstormsNightSnow from "../assets/icons/thunderstorms-night-snow.svg";
import fogDay from "../assets/icons/fog-day.svg";
import fogNight from "../assets/icons/fog-night.svg";
import partlyCloudyDayRain from "../assets/icons/partly-cloudy-day-rain.svg";
import partlyCloudyNightRain from "../assets/icons/partly-cloudy-night-rain.svg";
import partlyCloudyDaySnow from "../assets/icons/partly-cloudy-day-snow.svg";
import partlyCloudyNightSnow from "../assets/icons/partly-cloudy-night-snow.svg";
import partlyCloudyDaySleet from "../assets/icons/partly-cloudy-day-sleet.svg";
import partlyCloudyNightSleet from "../assets/icons/partly-cloudy-night-sleet.svg";
import partlyCloudyDayDrizzle from "../assets/icons/partly-cloudy-day-drizzle.svg";
import partlyCloudyNightDrizzle from "../assets/icons/partly-cloudy-night-drizzle.svg";
import uvIndex from "../assets/icons/uv-index.svg"
import uvIndex1 from "../assets/icons/uv-index-1.svg"
import uvIndex2 from "../assets/icons/uv-index-2.svg"
import uvIndex3 from "../assets/icons/uv-index-3.svg"
import uvIndex4 from "../assets/icons/uv-index-4.svg"
import uvIndex5 from "../assets/icons/uv-index-5.svg"
import uvIndex6 from "../assets/icons/uv-index-6.svg"
import uvIndex7 from "../assets/icons/uv-index-7.svg"
import uvIndex8 from "../assets/icons/uv-index-8.svg"
import uvIndex9 from "../assets/icons/uv-index-9.svg"
import uvIndex10 from "../assets/icons/uv-index-10.svg"
import uvIndex11 from "../assets/icons/uv-index-11.svg"


export const WEATHER_ICONS: { [key: string]: { day: string; night: string } } = {
    "1000": {
        day: clearDay,
        night: clearNight,
    },
    "1003": {
        day: partlyCloudyDay,
        night: partlyCloudyNight,
    },
    "1006": {
        day: cloudy,
        night: cloudy,
    },
    "1009": {
        day: overcastDay,
        night: overcastNight,
    },
    "1030": {
        day: mist,
        night: mist,
    },
    "1063": {
        day: partlyCloudyDayRain,
        night: partlyCloudyNightRain,
    },
    "1066": {
        day: partlyCloudyDaySnow,
        night: partlyCloudyNightSnow,
    },
    "1069": {
        day: partlyCloudyDaySleet,
        night: partlyCloudyNightSleet,
    },
    "1072": {
        day: partlyCloudyDayDrizzle,
        night: partlyCloudyNightDrizzle,
    },
    "1087": {
        day: thunderstormsDay,
        night: thunderstormsNight,
    },
    "1114": {
        day: snow,
        night: snow,
    },
    "1117": {
        day: snow,
        night: snow,
    },
    "1135": {
        day: fogDay,
        night: fogNight,
    },
    "1147": {
        day: fogDay,
        night: fogNight,
    },
    "1150": {
        day: drizzle,
        night: drizzle,
    },
    "1183": {
        day: rain,
        night: rain,
    },
    "1195": {
        day: rain,
        night: rain,
    },
    "1210": {
        day: partlyCloudyDaySnow,
        night: partlyCloudyNightSnow,
    },
    "1240": {
        day: rain,
        night: rain,
    },
    "1273": {
        day: thunderstormsDayRain,
        night: thunderstormsNightRain,
    },
    "1276": {
        day: thunderstormsDayRain,
        night: thunderstormsNightRain,
    },
    "1279": {
        day: thunderstormsDaySnow,
        night: thunderstormsNightSnow,
    },
    "1282": {
        day: thunderstormsDaySnow,
        night: thunderstormsNightSnow,
    },
};

export const UV_INDEX_ICONS: {[key:number]:string} ={
    0: uvIndex,
    1: uvIndex1,
    2: uvIndex2,
    3: uvIndex3,
    4: uvIndex4,
    5: uvIndex5,
    6: uvIndex6,
    7: uvIndex7,
    8: uvIndex8,
    9: uvIndex9,
    10: uvIndex10,
    11: uvIndex11,
}
