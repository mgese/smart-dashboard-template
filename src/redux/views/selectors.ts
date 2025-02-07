import type { RootState } from '../store';
import {IViews} from "../../types/views";

const selectViewsState = (state: RootState) => {
    const views: IViews | Object = state.views;

    return "id" in views ? (views as IViews) : undefined
}

export const selectViews = (state: RootState) => selectViewsState(state)?.views;

export const selectViewsLength = (state: RootState) => (selectViewsState(state)?.views.length ?? 0) + 1;
