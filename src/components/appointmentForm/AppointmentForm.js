import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input 
        value={date}
        type="date"
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
      />
      <input 
        value={time}
        type="time"
        onChange={(e) => setTime(e.target.value)}
      />
      <ContactPicker 
        value={contact}
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
      />
      <button type="submit">
        Add Appointment
      </button>
    </form>
  );
};
