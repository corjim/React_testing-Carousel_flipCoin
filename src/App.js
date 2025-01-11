
import React, { useState } from "react";
import "./App.css";
import Carousel from "./Carousel";
import photos from "./photos.js";
import Coin from "./Coin";

/** App component, renders Carousel
 * 
 * Props: none
 * State: none
 * 
 * App --> Carousel
 */

function App() {

  // In real life, this data would probably come from an AJAX call.
  // For our purposes, we're just importing from another file.
  const carouselPhotos = photos;
  const carouselTitle = "Shells from far-away beaches";

  const [coinFace, setCoinFace] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  function flipCoin() {
    const isHeads = Math.random() < 0.5;
    if (isHeads) {
      setCoinFace("heads");
      setHeadsCount(headsCount + 1);
    } else {
      setCoinFace("tails");
      setTailsCount(tailsCount + 1);
    }
  }

  return (
    <>
      <div className="App">
        <Carousel photos={carouselPhotos} title={carouselTitle} />
      </div>

      {/* FlipCoin div */}
      <div className="FlipCoin">
        <h1>Coin Flip</h1>
        <Coin face={coinFace} />
        <button onClick={flipCoin}>Flip Coin</button>
        <p>
          Heads: {headsCount} | Tails: {tailsCount}
        </p>
      </div>
    </>
  );
}
export default App;
