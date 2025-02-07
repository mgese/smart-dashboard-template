import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Weather from "./weather/Weather";
import "./views.scss"
import Indicators from "../shared/indicators/Indicators";
import {useAppSelector} from "../../hooks/redux";
import {selectViews} from "../../redux/views/selectors";
import View from "./view/View";

const Views = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const containerRef = React.useRef<HTMLDivElement | null>(null);

    const views = useAppSelector(selectViews)

    const scrollToStart = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        }
    };

    const resetTimeout = useCallback(() => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        const id = setTimeout(() => {
            scrollToStart();
        }, 60 * 1000);

        setTimeoutId(id);
    },[timeoutId]);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return
        }

        container.addEventListener("scroll", resetTimeout);
        window.addEventListener("click", resetTimeout);
        window.addEventListener("touchstart", resetTimeout);

        return () => {
            container.removeEventListener("scroll", resetTimeout);
            window.removeEventListener("click", resetTimeout);
            window.removeEventListener("touchstart", resetTimeout);

            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [resetTimeout, timeoutId]);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) {
            return;
        }

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const pageWidth = container.offsetWidth;
            const currentPage = Math.round(scrollLeft / pageWidth);

            setCurrentIndex(currentPage);
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const content = useMemo(()=>{
        return views?.map(({name,devices})=> {
            return <View key={`view__${name}`} devices={devices}/>
        })
    },[views])

    return (
        <div className="views" ref={containerRef}>
            <Weather/>
            {content}
            <Indicators currentIndex={currentIndex}/>
        </div>
    );
}

export default Views;
