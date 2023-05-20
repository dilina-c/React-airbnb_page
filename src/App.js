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
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      title={item.title}
      price={item.price}
      country={item.location}
      id={item.id}
      openspots={item.openSpots} />
  })
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <section className='card-list'>{cardData}</section>
      

    </div>
  );
}

export default App;
