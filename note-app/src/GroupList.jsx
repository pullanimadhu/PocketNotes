// GroupList.jsx
import React from 'react';

const GroupList = ({ groups, handleGroupSelection }) => (
  <div className='note-subject'>
    {groups.map((group, index) => (
      <p key={index} onClick={() => handleGroupSelection(group)}>
        Group Name: {group}
      </p>
    ))}
  </div>
);

export default GroupList;
