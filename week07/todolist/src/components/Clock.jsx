import { useEffect, useState } from "react";

const Clock = () => {
    const [formattedDate, setFormattedDate] = useState("0000.00.00.");
    const [formattedTime, setFormattedTime] = useState("00:00:00");

    useEffect(() => {
        const updateClock = () => {
            const date = new Date();

            const padHours = String(date.getHours()).padStart(2, "0");
            const padMinutes = String(date.getMinutes()).padStart(2, "0");
            const padSeconds = String(date.getSeconds()).padStart(2, "0");

            setFormattedDate(
                `${date.getFullYear()}. ${
                    date.getMonth() + 1
                }. ${date.getDate()}.`
            );
            setFormattedTime(`${padHours}:${padMinutes}:${padSeconds}`);
        };

        const timer = setInterval(updateClock, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="clock">
            <div className="day">{formattedDate}</div>
            <div className="time">{formattedTime}</div>
        </div>
    );
};

export default Clock;
