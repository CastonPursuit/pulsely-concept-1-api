import React, { useState } from 'react';
import CircleIndicator from './circleIndicator';
import './'

function App() {
  const [color, setColor] = useState('#3498db');

  return (
    <div className="App">
      <div> 
        <CircleIndicator color={color}/>
      </div>
    </div>
  );
}

export default App;

