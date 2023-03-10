import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "๐": "smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐": "Relieved Face",
  "๐": "Pensive Face",
  "๐ช": " Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐ท": " Face with Medical Mask",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": " Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Face with Crossed-Out Eyes",
  "๐ตโ๐ซ": "Face with Spiral Eyes",
  "๐คฏ": "Exploding Head",
  "๐ค ": "Cowboy Hat Face",
  "๐ฅณ": "Partying Face",
  "๐ฅธ": "Disguised Face",
  " ๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "๐ฎ": "Face with Open Mouth"
};

var existingEmojis = Object.keys(emojiDictionary);
var existingValues = Object.values(emojiDictionary);

export default function App() {
  const [input, setInput] = useState("");

  function identifier(event) {
    var meaning = event.target.value;
    var meaningIdentifier = emojiDictionary[meaning];
    setInput(meaningIdentifier);
    if (meaningIdentifier === undefined) {
      setInput("Your input isnt found in the data base");
    }
  }

  function clickhandler(index) {
    var emojiidentifier = existingValues[index];
    setInput(emojiidentifier);
  }

  return (
    <div className="App">
      <h1>Inside out</h1>
      <input
        id="inp-ref"
        placeholder="Whats your emoji like son ?"
        onChange={identifier}
      ></input>
      <h2>{input}</h2>

      <div>
        {existingEmojis.map(function (emojis, index) {
          return (
            <span onClick={() => clickhandler(index)} style={{ fontSize: 25 }}>
              {" "}
              {emojis}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
