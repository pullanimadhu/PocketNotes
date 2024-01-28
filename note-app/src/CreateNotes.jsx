import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';

const CreateNotes = ({ handleCreateGroup, closePopup, isPopupOpen }) => {
  const [groupName, setGroupName] = useState('');

  useEffect(() => {
    // Reset the group name when the popup opens
    if (isPopupOpen) {
      setGroupName('');
    }
  }, [isPopupOpen]);

  const handleChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleCreate = () => {
    handleCreateGroup(groupName);
  };

  return (
    <Popup open={isPopupOpen} onClose={closePopup}>
      <div>
        <h2>Create Group</h2>
        <label htmlFor="groupName">Group Name:</label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={handleChange}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
    </Popup>
  );
};

export default CreateNotes;
