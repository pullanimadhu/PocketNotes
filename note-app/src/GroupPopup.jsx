// GroupPopup.jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './GroupPopup.css';

const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']; // Updated colors

const GroupPopup = ({ isOpen, closePopup, handleCreateGroup }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]); // Default color
  const [name,setName]=useState('')

  const handleColorClick = (color) => {
    
    setSelectedColor(color);
  };

  const handleCreateGroupWithColor = () => {
    // Pass the selected color to the handleCreateGroup function
    handleCreateGroup(selectedColor, name);
  };

  return (
    <div className='group-popup'>
      <h2>Create Group</h2>
      <label htmlFor="groupName">Group Name:</label>
      <TextField id="groupname" label="Enter Group name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />

      <div className='color-chooser'>
        {colors.map((color, index) => (
          <button
            key={index}
            className='color-circle'
            style={{ backgroundColor: color, border: selectedColor === color ? '2px solid black' : 'none' }}
            onClick={() => handleColorClick(color)}
          ></button>
        ))}
      </div>

        <Button variant="contained" onClick={handleCreateGroupWithColor}>
          Create
        </Button>
      </div>
  );
};

export default GroupPopup;
