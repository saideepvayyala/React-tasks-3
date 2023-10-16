import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';


function App() {
  const colors = ['red',
  'green','blue','yellow','orange','purple','pink','teal','violet','brown','indigo','cyan',
  'lime',
  'maroon',
  'gold',
  'olive',
  'navy',
  'pink',];

  return (
    <div className="app">
      <h1>Color Picker App</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;