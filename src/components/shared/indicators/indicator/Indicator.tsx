import React from 'react';
import './indicator.scss';

interface IndicatorProps {
    isActive?: boolean;
}

const Indicator = ({isActive}:IndicatorProps) => {


    return (
        <div className="indicator" style={{scale: isActive ? 1.3 : 1}}/>
    );
}

export default Indicator;
