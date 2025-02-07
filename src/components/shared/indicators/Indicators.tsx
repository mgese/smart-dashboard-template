import React, {useMemo} from 'react';
import './indicators.scss';
import Indicator from "./indicator/Indicator";
import {useAppSelector} from "../../../hooks/redux";
import {selectViewsLength} from "../../../redux/views/selectors";

interface IndicatorsProps {
    currentIndex: number;
}

const Indicators = ({currentIndex}:IndicatorsProps) => {
    const viewCount = useAppSelector(selectViewsLength)

    const content = useMemo(()=>{
        return Array.from({length: viewCount}, (v, i) => i).map((index)=>{
            return <Indicator key={`indicator__${index}`} isActive={index === currentIndex}/>
        })
    },[currentIndex, viewCount])

    return (
        <div className="indicators">
            {content}
        </div>
    );
}

export default Indicators;
