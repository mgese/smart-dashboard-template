import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IViews} from "../../types/views";

const initialState: IViews | Object = {};

const slice = createSlice({
    initialState,
    name: 'views',
    reducers: {
        setViews(state, { payload }: PayloadAction<IViews>) {
            return state = payload;
        }
    }
});

export const { setViews } = slice.actions;

export const viewsReducer = slice.reducer;
