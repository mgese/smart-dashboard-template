import { AppDispatch, GetAppState } from '../store';
import { setWeather} from './slice';
import {transformWeatherResponse} from "../../utils/transform";
import {getWeather} from "../../api/weather/get";

export const loadWeather =
    () =>
    async (dispatch: AppDispatch, _: GetAppState): Promise<void> => {
        const { status, data } = await getWeather();

        if (status === 200 && data) {
            dispatch(setWeather(transformWeatherResponse(data)));

            return;
        }

        return;
    };

