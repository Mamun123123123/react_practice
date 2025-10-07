import React, { useRef, useState } from "react";

const EventTable = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const dateTimeRef = useRef();
  const locationRef = useRef();
  const [events, setEvents] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title: titleRef.current.value,
      description: descRef.current.value,
      dateTime: dateTimeRef.current.value,
      location: locationRef.current.value,
    };
    setEvents([...events, newEvent]);
    titleRef.current.value = "";
    descRef.current.value = "";
    dateTimeRef.current.value = "";
    locationRef.current.value = "";
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={titleRef} placeholder="Title" required /><br />
        <input type="text" ref={descRef} placeholder="Description" required /><br />
        <input type="datetime-local" ref={dateTimeRef} required /><br />
        <input type="text" ref={locationRef} placeholder="Location" required /> <br />
        <button type="submit">Add Event</button>
      </form>
      <h2>Event List</h2>
      <table >
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Date & Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.title}</td>
              <td>{event.description}</td>
              <td>{event.dateTime}</td>
              <td>{event.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
