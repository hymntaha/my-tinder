import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';

const MyComponent = () => {
  const [people, setPeople] = useState([]);

  useEffect(()=>{
    database.collection('people').onSnapshot(snapshot => (
      setPeople(snapshot.docs.map(doc => doc.data()))
    ));
  },[])

  return (
    <div>
      <h1>Tinder Cards</h1>
      <div className="tinderCards__cardContainer">
        {people.map(person=>(
          <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']} >
            <div className="card" style={{backgroundImage: `url(${person.url}`}}>
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
