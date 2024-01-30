def get_initials(name):
    words = name.split()
    initials = ''.join(word[0].upper() for word in words)
    return initials

# Example
full_name = "My Name"
result = get_initials(full_name)
print(result)






















// GroupPopup.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const GroupPopup = ({ isOpen, closePopup, groupName, setGroupName, handleCreateGroup }) => (
  <div>
    <h2>Create Group</h2>
    <label htmlFor="groupName">Group Name:</label>
    <TextField id="groupname" label="Enter Group name" variant="outlined"  value={groupName} onChange={(e) => setGroupName(e.target.value)}
/>
<di>Choose your color
<button className='bt1' id='btt1'></button>
<button className='bt1' id='btt2'></button><br />
<button className='bt1'></button><br />
<button className='bt1'></button><br />
<button className='bt1'></button><br />
<button className='bt1'></button><br />

</di>
<Button variant="contained" onClick={handleCreateGroup}>Create</Button>
<form ><label> Choose Colour</label>
<button className='bt1' id='btt2'></button>
</form>
  </div>
);

export default GroupPopup;















// GroupPopup.jsx
import React from 'react';
import styled from 'styled-components';

const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`;

const GroupPopup = ({
  isOpen,
  closePopup,
  groupName,
  setGroupName,
  selectedColor,
  setSelectedColor,
  handleCreateGroup,
}) => {
  const calculateInitials = (name) => {
    const words = name.split(' ');

    // Filter out empty strings and get the first character of each word
    const initials = words
      .filter((word) => word.trim() !== '')
      .map((word) => word[0].toUpperCase())
      .join('');

    return initials;
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Create Group</h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Circle color={selectedColor}>{calculateInitials(groupName)}</Circle>
        <label htmlFor="groupName">Group Name:</label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </div>

      <ColorPickerContainer>
        {['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e'].map((color) => (
          <ColorButton
            key={color}
            style={{ backgroundColor: color, border: selectedColor === color ? '2px solid #000' : 'none' }}
            onClick={() => handleColorClick(color)}
          />
        ))}
      </ColorPickerContainer>

      <button onClick={handleCreateGroup}>Create</button>
      {/* <button onClick={closePopup}>Cancel</button> */}
    </div>
  );
};

export default GroupPopup;
