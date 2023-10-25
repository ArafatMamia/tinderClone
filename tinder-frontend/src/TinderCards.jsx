import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      console.log("data", req.data);
      setPeople(req.data);
    }
    fetchData();
  }, []);
  console.log(people);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setPeople(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((character) => (
          <TinderCard
            className="swipe"
            key={character.__id}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <div
              style={{ backgroundImage: `url(${character.imgUrl})` }}
              className="card"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
