import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState({});

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setGroupName('');
  };

  const handleCreateGroup = () => {
    if (groupName.trim() !== '') {
      setGroups([...groups, groupName]);
      setNotes((prevNotes) => ({ ...prevNotes, [groupName]: [] }));
      closePopup();
    }
  };

  const handleGroupSelection = (group) => {
    setSelectedGroup(group);
  };

  const handleNoteChange = (event, index) => {
    const { value } = event.target;
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes[selectedGroup]];
      updatedNotes[index] = value;
      return { ...prevNotes, [selectedGroup]: updatedNotes };
    });
  };

  const handleAddNote = () => {
    setNotes((prevNotes) => ({ ...prevNotes, [selectedGroup]: [...prevNotes[selectedGroup], ''] }));
  };

  return (
    <Wrapper>
      <div className='screen'>
        <div className='index-part'>
          <p className='sticky-element'>Pocket Notes</p>
          <button className='add-button' onClick={openPopup}>+</button>
          <div className='note-subject'>
            {/* Display all created groups */}
            {groups.map((group, index) => (
              <p key={index} onClick={() => handleGroupSelection(group)}>
                Group Name: {group}
              </p>
            ))}
          </div>
        </div>

        {selectedGroup ? null : (
          <div className="card">
            <span><img className='note_image' src="/images/home image.svg" alt="image" /></span>
            <span className='logo-heading'>Pocket Notes</span>
            <span className='logo-text'>
              Send and receive messages without keeping your phone online. <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </span>
            <div className='footer-text'>
              <div className='footer' >
                <img className='lock-image' src="/images/lock.svg" alt="security symbol" />
                end-to-end encrypted
              </div>
            </div>
          </div>
        )}

        {selectedGroup && (
          <div>
            <h2>{selectedGroup}</h2>
            {notes[selectedGroup].map((note, index) => (
              <textarea key={index} rows="4" cols="50" value={note} onChange={(e) => handleNoteChange(e, index)} />
            ))}
            <button onClick={handleAddNote}>Add Note</button>
          </div>
        )}

        <Popup open={isPopupOpen} onClose={closePopup}>
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
        </Popup>
      </div>
    </Wrapper>
  );
}

export default App;
