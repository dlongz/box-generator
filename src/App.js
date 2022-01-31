import React, {useState} from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import GenerateBoxes from './Components/GenerateBoxes';

function App() {
  
  const [colorList, setColorList] = useState([])



  return (
    <div className="App">
      <ColorPicker colorList={ colorList} setColorList={setColorList}/>
      <GenerateBoxes colorList={colorList}/>
    </div>
  );
}

export default App;
