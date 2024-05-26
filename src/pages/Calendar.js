import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NavBar from "../components/Navbar/NavBar";

const locales = {
  "en-US": enUS,
};

const myEventsList = [
  {
    start: new Date(2024, 5, 10),
    end: new Date(2024, 5, 11),
    title: "test event",
    description: "This is a test description of an event",
  },
  {
    start: new Date(2022, 3, 4),
    end: new Date(2022, 3, 4),
    title: "test event",
    description: "This is a test description of an event",
  },
  {
    start: new Date(2022, 3, 4),
    end: new Date(2022, 3, 4),
    title: "test event",
    description: "This is a test description of an event",
  },
  {
    start: new Date(2022, 3, 4),
    end: new Date(2022, 3, 6),
    title: "test event",
    description: "This is a test description of an event",
  },
];

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = (props) => (
  <>
    <div>
      <NavBar />
    </div>
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  </>
);

export default MyCalendar;
