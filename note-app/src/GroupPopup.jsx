// GroupPopup.jsx
import React from 'react';

const GroupPopup = ({ isOpen, closePopup, groupName, setGroupName, handleCreateGroup }) => (
  <div>
    <h2>Create Group</h2>
    <label htmlFor="groupName">Group Name:</label>
    <input
      type="text"
      id="groupName"
      value={groupName}
      onChange={(e) => setGroupName(e.target.value)}
    />
    <button onClick={handleCreateGroup}>Create</button>
  </div>
);

export default GroupPopup;
