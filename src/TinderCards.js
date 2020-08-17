import React, {useEffect, useState} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

const MyComponent = () => {
  const [people, setPeople] = useState([
    {
      name: 'Steve Jobs',
      url: 'https://2060krokus12o7dbd503f81w-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/ATA010819jobs_img01.jpg'
    }, {
      name:'Mark Zuckerberg',
      url:'https://image.cnbcfm.com/api/v1/image/105974278-1560857198722gettyimages-1146088646.jpeg?v=1562202866&w=740&h=416'
    }
  ]);

  useEffect(()=>{

  },[people])

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
