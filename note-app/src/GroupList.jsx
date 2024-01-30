// GroupList.jsx
import React from 'react';
import './GroupList.css';

const calculateInitials = (name) => {
  const words = name.split(' ');

  const initials = words
    .filter((word) => word.trim() !== '')
    .map((word) => word[0].toUpperCase())
    .join('');

  return initials;
};

const GroupList = ({ groups, handleGroupSelection }) => (
  <div className='note-subject'>
    {groups.map((group, index) => (
      <p key={index} onClick={() => handleGroupSelection(group)}>
        <span className='circle'>{calculateInitials(group)}</span>
        <span className='group-name'>{group}</span>
      </p>
    ))}
  </div>
);

export default GroupList;
