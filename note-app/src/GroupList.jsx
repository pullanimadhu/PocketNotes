// GroupList.jsx
import React from 'react';
import './GroupList.css'

/// GroupList.jsx
export const calculateInitials = (name, selectedColor) => {
   const words = name.split(' ');

  let initials = '';

  if (words.length >= 2) {
    // Take the first letter of the first word and the first letter of the second word
    initials = words[0][0].toUpperCase() + words[1][0].toUpperCase();
  } else if (words.length === 1) {
    // If there is only one word, take the first two letters of that word
    initials = words[0].slice(0, 2).toUpperCase();
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', margin: '4px' }}>
      <div
        style={{
          backgroundColor: selectedColor[name], // Access the color for the specific group
          width: '36px', // Adjust the width to your preference
          height: '36px', // Adjust the height to your preference
          borderRadius: '50%', // Make it a perfect circle
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '8px',
        }}
      >
        <span>{initials}</span>
      </div>
      <span>{name}</span>
    </div>
  );
};

const GroupList = ({ groups, handleGroupSelection, selectedColor }) => (
  <div className='note-subject'>
    {groups.map((group, index) => (
      <div key={index} onClick={() => handleGroupSelection(group)}>
        {calculateInitials(group, selectedColor)}
      </div>
    ))}
  </div>
);

export default GroupList;
