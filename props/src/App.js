import React from 'react';
import logo from './logo.svg';
import './App.css';
import ContactCard from './ContactCard';

function App() {
  return (
    <div className="contacts">
      <ContactCard 
        name="Mr. Whiskerson"
        imgUrl="http://placekitten.com/200/200"
        phone="909234234"
        email="email@enma.meow"
      />

      <ContactCard 
        name="Mr. rson"
        imgUrl="http://placekitten.com/400/200"
        phone="876323457"
        email="dktj@kiuhg.meow"
      />

      <ContactCard 
      contact = {
        {
        name:"Fluffykin",
        imgUrl:"http://placekitten.com/400/300",
        phone:"909234234",
        email:"iuygnmk@enma.meow",
        }
      }
      />

      <ContactCard 
        name="Desryoin"
        imgUrl="http://placekitten.com/300/200"
        phone="9899754324"
        email="ytrer@enma.meow"
      />
    </div>
  )
}

export default App;
