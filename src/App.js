import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';
import React from 'react';
import './App.css';

function App() {
  const cardData = data.map((item) => {
    return < Card
      key={item.id}
      {...item}
      />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>{cardData}</section>
      

    </div>
  );
}

export default App;
