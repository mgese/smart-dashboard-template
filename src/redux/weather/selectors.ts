import type { RootState } from '../store';

const selectWeatherState = (state: RootState) => state.weather;

export const selectHumidity = (state: RootState) => selectWeatherState(state).humidity ?? 0;

export const selectWindSpeed = (state: RootState) => selectWeatherState(state).windSpeed ?? 0;

export const selectUVIndex = (state: RootState) => selectWeatherState(state).uvIndex ?? 0;

export const selectTemperature = (state: RootState) => selectWeatherState(state).temperature ?? 0;

export const selectFeelsLike = (state: RootState) => selectWeatherState(state).feelsLike ?? 0;

export const selectConditionText = (state: RootState) => selectWeatherState(state).conditionText ?? '';

export const selectConditionCode = (state: RootState) => selectWeatherState(state).conditionCode ?? '';

export const selectIsDay = (state: RootState) => selectWeatherState(state).isDay ?? true;
