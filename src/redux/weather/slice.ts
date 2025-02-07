import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IWeather} from "../../types/weather";

const initialState: IWeather = {};

const slice = createSlice({
    initialState,
    name: 'weather',
    reducers: {
        setWeather(state, { payload }: PayloadAction<IWeather>) {
            return { ...state, ...payload };
        }
    }
});

export const { setWeather } = slice.actions;

export const weatherReducer = slice.reducer;
