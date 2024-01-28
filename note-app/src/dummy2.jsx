import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import CreateNotes from './CreateNotes';

const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

function App() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateGroup = (groupName) => {
    if (groupName.trim() !== '' && !groups.includes(groupName)) {
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

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Wrapper>
      <div className='screen'>
        <div className='index-part'>
          <p className='sticky-element'>Pocket Notes</p>
          <button className='add-button' onClick={openPopup}>+</button>
          <div className='note-subject'>
            {groups.map((group, index) => (
              <p key={index} onClick={() => handleGroupSelection(group)}>
                Group Name: {group}
              </p>
            ))}
          </div>
        </div>

        {selectedGroup ? null : (
          <div className="card">
            {/* ... (previous code) */}
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
      </div>

      <CreateNotes
        handleCreateGroup={handleCreateGroup}
        closePopup={closePopup}
        isPopupOpen={isPopupOpen}
      />
    </Wrapper>
  );
}

export default App;
