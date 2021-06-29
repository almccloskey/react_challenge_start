import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option
        key="default"
        value=""
        selected="selected"
      >
        No Contact selected
      </option>
      {contacts.map((contact) => (
        <option
          key={contact.name}
          value={contact.name}
        >
          {contact.name}
        </option>
      ))}

    </select>
  );
};
