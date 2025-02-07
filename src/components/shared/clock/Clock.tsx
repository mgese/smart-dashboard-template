import React from 'react';
import './clock.scss';
import {useCurrentTime} from "../../../hooks/time";

const Clock = () => {
    const {minutes, hours} = useCurrentTime();

    return (
        <div className="clock">
            {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')} Uhr
        </div>
    );
}

export default Clock;
