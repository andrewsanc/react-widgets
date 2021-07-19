import React from 'react';
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import './App.css';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript Framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JavaScript library among engineers.'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  },
]

const App = () => {
  return (
    <div className='ui container'>
      <Dropdown />
    </div>
  )
}

export default App;