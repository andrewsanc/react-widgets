import React from 'react';
import Accordion from './Accordion';
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
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App;