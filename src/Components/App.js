import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import "./App.css";

const items = [
  {
    title: "What is React?",
    content: "React is a front end JavaScript Framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JavaScript library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  return (
    <div className='ui container'>
      <Translate />
    </div>
  );
};

export default App;
