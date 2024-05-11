import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ShowCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <Calendar onChange={onChange} value={value}></Calendar>
    </div>
  );
};

export default ShowCalendar;
