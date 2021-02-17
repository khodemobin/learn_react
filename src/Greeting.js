import React from "react";

export default function Greeting({ name }) {
  let isMorning = new Date().getHours() < 12;
  return isMorning ? (
    <>
      <h3>Good Morning {name}</h3>
    </>
  ) : (
    <h3>Good Evening {name}</h3>
  );
}
