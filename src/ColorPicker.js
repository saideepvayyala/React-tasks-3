import React, { useState } from 'react';
import './ColorPicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  const toggleColorList = () => {
    setShowColorList(!showColorList);
  };

  const pickColor = (color) => {
    setSelectedColor(color);
    toggleColorList();
  };

  return (
    <div className="color-picker">
      <button className="btn btn-success" onClick={toggleColorList}>Pick a color</button>
      {showColorList && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => pickColor(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;