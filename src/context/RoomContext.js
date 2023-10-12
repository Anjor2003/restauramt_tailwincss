import React, { createContext, useEffect, useState } from "react";

import { roomData } from "../data";

// creamos context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState('1 Adult');
  const [kids, setkids] = useState('0 Kids');
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]))
  }, [adults, kids ]);
  
  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // filtranos habitaciones segun total de personas
    const newRooms = roomData.filter(room => {
      return total <= room.maxPerson 
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);      
    }, 3000);
};

  return (
    <RoomContext.Provider value={{ rooms, adults, setAdults, kids, setkids, handleClick, loading }}>{children}</RoomContext.Provider>
  );
};

export default RoomProvider;
