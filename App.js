import React, { useState } from "react";
import "./styles.css";
import foodCB from "./basic.js";

export default function App() {
  const roasting = Object.keys(foodCB);
  const [clickedroasting, setClickedroasting] = useState("Indian");

  function onClickHandler(roasting) {
    setClickedroasting(roasting);
  }

  return (
    <div className="App">
      <header>
        <h1> Bhukkad's Food App 🤤🤤🤤</h1>
        <p>Hello! guys checkout these delicious dishes 😋</p>
      </header>

      <main>
        {roasting.map((roasting) => {
          return (
            <button
              key={roasting}
              onClick={() => onClickHandler(roasting)}
              className="btn"
            >
              {roasting}
            </button>
          );
        })}

        <hr />

        <div className="container">
          {foodCB[clickedroasting].map((food) => {
            return (
              <div className="dish">
                <div>
                  <img src={`./images/${food.img}`} className="img"></img>
                </div>
                <h3>Name: {" " + food.dish}</h3>
                <p>Ratings: {food.ratings}</p>
              </div>
            );
          })}
        </div>
      </main>

      <footer>
        <p>
          Made by <strong>ARIS AHMED</strong>
        </p>
      </footer>
    </div>
  );
}
