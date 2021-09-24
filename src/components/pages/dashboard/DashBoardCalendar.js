import React from "react";
import classes from "./DashBoardCalendar.module.css";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
const DashBoardCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className={classes.calendar}>
      <Calendar
        className={classes["react-calendar"]}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default DashBoardCalendar;
