import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={name}
        type='text' 
        onChange={(e) => setName(e.target.value)}
      />
      <input value={phone}
        type='tel'
        onChange={(e) => setPhone(e.target.value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
      />
      <input value={email}
        type='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type='submit'>
        Submit
      </button>
    </form>
  );
};
