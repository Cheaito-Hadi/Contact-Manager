import React from 'react';
import axios from "axios";
import "./Cards.css";
import { useEffect, useState } from "react";


export default function Cards() {
  const [cards, setCards] = useState([]);

  const fetchCards = async ()=>{
    const response = await axios.get("http://localhost:3001/posts");
    setPosts(response.data)
  }
  useEffect(()=>{
    fetchPosts()
  }, [])


  return (
      <div className="card">
        <p>Name: </p>
        <p>Phone number: </p>
        <p>Adress: </p>
      </div>
  );
}
