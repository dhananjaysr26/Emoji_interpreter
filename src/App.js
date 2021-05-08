import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "OK Hand"
};

//var likeC=0;
export default function App() {
  var [userInput, setUserInput] = useState("");
  const [likeC,setlikeC]=useState(10);
  var [meaning,setMeaning]= useState("");
  var emojisWeKnown=Object.keys(emojiDictionary);

//Fun for like handler
  function likeChangeHandler(){
    var newLikeC=likeC+1;
    setlikeC(newLikeC);
  }
//Fun for Name handler
  function inputChangeHandler(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }
//Fun for Emoji Input handler
function emojiInputHandler(event){
  var userInput=event.target.value;
  console.log(event.target.value);
  var meaning=emojiDictionary[userInput];
  
  if(meaning===undefined){
  meaning="Unknown";
  }
  setMeaning(meaning);
  }
//Fun for Emoji Click handler
function emojiClickHandler(emoji){
  var meaning=emojiDictionary[emoji];
  setMeaning(meaning);

}

  return (
    <div className="App">
      <h1>Emoji Interpreter!!</h1>
      
      <input onChange={inputChangeHandler} placeholder="Enter Your Name" />
      <h1>Welcome {userInput}</h1>
      <input onChange={emojiInputHandler} placeholder="Enter Emoji Here"/>
      <h1>Meaning: {meaning}</h1>
      <h3> Emoji We Known</h3>
      {emojisWeKnown.map((emoji) => {
return (
<span onClick={()=>emojiClickHandler(emoji)}
style={{fontSize:"2rem" ,padding:"0.5rem" ,cursor:"pointer"}}
key={emoji}>
{emoji}
</span>);
})}

 <button onClick={likeChangeHandler}>LikeMe</button> {likeC  }

    </div>


  );
}
