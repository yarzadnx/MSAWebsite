import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const locales = {
  "en-US": enUS,
};

const MyCalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("https://backendmsa-63ec40c9f736.herokuapp.com/events")
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map((event) => ({
          ...event,
          start: new Date(event.start),
          end: new Date(event.end),
        }));
        setEvents(formattedEvents);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
  };

  const handleModalClose = () => {
    setSelectedEvent(null);
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  function parseTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="mt-20">
        <hr className="mb-12 h-1 bg-black border-none" />
        <div style={{ height: "86vh" }}>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%", color: "purple" }}
            onSelectEvent={handleEventSelect}
          />
        </div>
      </div>
      {selectedEvent && (
        <div className="modal-container">
          <div className="modal-backdrop" onClick={handleModalClose}></div>
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h1 className="font-bold text-xl">{selectedEvent.title}</h1>
            <p>
              <strong>Location:</strong> {selectedEvent.time}
            </p>
            <p>
              <strong>Time:</strong> {parseTime(selectedEvent.start)} -{" "}
              {parseTime(selectedEvent.end)}
            </p>
            <p>{selectedEvent.description}</p>
          </div>
        </div>
      )}
      <Footer />
      <style jsx>{`
        .rbc-toolbar-label {
          font-size: 2.6em;
          font-weight: bolder;
          color: #491078;
        }

        .modal-container {
          position: fixed;
          z-index: 999;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(5px); /* Apply blur effect */
          background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity */
        }

        .modal-content {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fefefe;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          z-index: 1000;
        }

        .close {
          color: #aaa;
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 24px;
          cursor: pointer;
        }

        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
        }
      `}</style>
    </>
  );
};

export default MyCalendar;
