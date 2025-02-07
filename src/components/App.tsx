import React, {useEffect} from 'react';
import './App.scss';
import Views from "./views/Views";
import {useAppDispatch} from "../hooks/redux";
import {loadWeather} from "../redux/weather/actions";
import Clock from "./shared/clock/Clock";

const App = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        // dispatch(setViews(VIEWS[0]))
    }, [dispatch]);

    useEffect(() => {
        void dispatch(loadWeather());

        const intervalId = window.setInterval(() => {
            void dispatch(loadWeather());
        }, 600000); // 600.000 ms = 10 minutes

        return () => clearInterval(intervalId);
    }, [dispatch]);

    return (
        <div className="app">
            <Clock/>
            <Views/>
        </div>
    );
}

export default App;
