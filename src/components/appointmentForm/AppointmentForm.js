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
      <input value={title}
        type="text"
      />
      <input value={date}
        type="date"
        min={getTodayString}
      />
      <input value={time}
        type="time"
      />
      <ContactPicker contacts={contacts} />
      <button type="submit">
        Add Appointment
      </button>
    </form>
  );
};
