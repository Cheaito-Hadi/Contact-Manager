import React from "react";
import axios from "axios";
import "./Cards.css";
import { MapContainer, Map, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";

export default function Cards() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/show_contacts");
    setCards(response.data.contacts);
  };
  useEffect(() => {
    fetchCards();
  }, []);

  const customIcon = new Icon({

    iconUrl: require("./marker.png"),
    iconSize: [25, 25]
  });

  return (
   <>
   <div>
      {cards.map((card) => {
        return (
          <div className="card">
            <p>Name: {card.name}</p>
            <p>Phone number: {card.phone_number}</p>
            <p>
              Adress: {card.latitude}-{card.longitude}
            </p>
          </div>
        );
      })}
    </div>
          <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          { cards.map((contact) => (
          <Marker position={[contact.latitude, contact.longitude]} icon={customIcon} key={contact.id}>
            <Popup>
              {contact.name} <br/> {contact.phone_number}
            </Popup>
          </Marker>
          ))
          }
        </MapContainer>
        </>  
  );
}
