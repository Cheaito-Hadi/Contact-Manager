import React from "react";
import axios from "axios";
import "./Cards.css";
import { useEffect, useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/show_contacts");
    setCards(response.data.contacts);
  };
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      {cards.map((card) => {
        return(
        <div className="card">
          <p>Name: {card.name}</p>
          <p>Phone number: {card.phone_number}</p>
          <p>Adress: {card.latitude}-{card.longitude}</p>
        </div>
      )})}
    </div>
  );
}
