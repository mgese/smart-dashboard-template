import {useEffect, useState} from "react";

export const useCurrentTime = () => {
    const [time, setTime] = useState(() => {
        const now = new Date();
        return {
            hours: now.getHours(),
            minutes: now.getMinutes(),
        };
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime({
                hours: now.getHours(),
                minutes: now.getMinutes(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
};
