import React from "react";
import "./AddContact.css";
import { useState } from "react";
import axios from "axios";

export default function AddContact() {
  const [contact, setContact] = useState({
    name: "",
    phone_number: "",
    latitude: "",
    longitude: "",
  });

  const handleDataChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitContact = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/add_update_contact", contact);
      console.log(contact)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <label>Name: </label>
        <input
          type="text"
          id="name"
          onChange={handleDataChange}
          name="name"
          placeholder="Name"
        />
        <label>Phone Number: </label>
        <input
          type="text"
          id="number"
          onChange={handleDataChange}
          name="phone_number"
          placeholder="Number"
        />
        <label>Latitude: </label>
        <input
          type="text"
          id="latitude"
          name="latitude"
          onChange={handleDataChange}
          placeholder="Latitude"
        />
        <label>Longitude: </label>
        <input
          type="text"
          id="longitude"
          onChange={handleDataChange}
          name="longitude"
          placeholder="Longitude"
        />
        <button type="button" onClick={submitContact}>Add Contact</button>
      </div>
    </div>
  );
}
