import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";
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
  const [selectedDropdown, setSelectedDropdown] = useState(options[0]);

  return (
    <React.Fragment>
      <Header />
      <div className='ui container'>
        <Route path='/'>
          <Accordion items={items} />
        </Route>
        <Route path='/list'>
          <Search />
        </Route>
        <Route path='/dropdown'>
          <Dropdown
            label='Select a Color'
            options={options}
            selectedDropdown={selectedDropdown}
            onSelectedChange={setSelectedDropdown}
          />
        </Route>
        <Route path='/translate'>
          <Translate />
        </Route>
      </div>
    </React.Fragment>
  );
};

export default App;
