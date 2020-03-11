import React, {useState, useEffect} from "react";
import axios from "axios";
import Title from "./Components/Text/TextTitle";
import DailyImage from "./Components/APOD/DailyImage";
import Text from "./Components/Text/text";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
      axios
          .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
              .then(res => {
                  // console.log(res.data);
                  // console.log(res.data.explanation);
                  setData(res.data.url);
                  setText(res.data.explanation);
                  setTitle(res.data.title);
                })
              .catch( err => {console.log(err)} )
  }, [])
  
  const ContainerDiv = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      margin: 100px;
      width: 100%;
      border-radius: 37px;
      background-color: #CCCFCF;
      box-shadow:  6px 6px 8px #e8ded3, 
                    -6px -6px 8px #e8ded3;
  `;

  const LeftDiv = styled.div`
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      width: 30%;
      border-radius: 37px;
      background-color: #CCCFCF;
      box-shadow:  6px 6px 8px #e8ded3, 
                    -6px -6px 8px #e8ded3;
  `;
  const RightDiv = styled.div`
      flex-direction: row;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 65%;
      padding: 2%;
      border-radius: 37px;
      background-color: #CCCFCF;
      box-shadow:  6px 6px 8px #e8ded3, 
                    -6px -6px 8px #e8ded3;
  `;
 
  return (
    <div className="App">
      <ContainerDiv>
          <LeftDiv className="leftDiv">
            <Title title={title}/>
            <Text text={text}/>
          </LeftDiv>
          <RightDiv className="rightDiv">
            <DailyImage url={data}/>
          </RightDiv>
      </ContainerDiv>
    </div>
  );
}

export default App;
