import React, {useState, useEffect} from "react";
import axios from "axios";
import Apod from "./Components/DailyImg/Apod";
import Text from "./Components/Text/text";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState([]);

  useEffect(() => {
      axios
          .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
              .then(res => {
                  // console.log(res.data);
                  // console.log(res.data.explanation);
                  setData(res.data.url);
                  setText(res.data.explanation);
                })
              .catch( err => {console.log(err)} )
  }, [])
  
 
  return (
    <div className="App">
      <Apod url={data}/>
      <Text text={text}/>
    </div>
  );
}

export default App;
