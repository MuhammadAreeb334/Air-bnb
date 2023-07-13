import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Cards from './components/Card';
import data from "./data"


function App() {
  
  const cards = data.map(items => {
    return <Cards 
      key = {items.id}
      items = {items}
      //or {...items} spread operator it does not required .items in 
    />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
