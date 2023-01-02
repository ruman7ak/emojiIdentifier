import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "😌": "Relieved Face",
  "😔": "Pensive Face",
  "😪": " Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": " Cold Face",
  "🥴": "Woozy Face",
  "😵": "Face with Crossed-Out Eyes",
  "😵‍💫": "Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🥸": "Disguised Face",
  " 😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "😮": "Face with Open Mouth"
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
