// App.jsx
import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GroupList from './GroupList';
import NoteEditor from './NoteEditor';
import GroupPopup from './GroupPopup';

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

  const handleNoteChange = (event) => {
    const { value } = event.target;
  
    // Check if the Enter key is pressed
    if (event.key === 'Enter') {
      event.preventDefault();
      if (value.trim() !== '') {
        setNotes((prevNotes) => ({
          ...prevNotes,
          [selectedGroup]: [value, ...prevNotes[selectedGroup] || []],
        }));
        event.target.value = ''; // Clear the textarea
      }
    } else {
      setNotes((prevNotes) => ({
        ...prevNotes,
        [selectedGroup]: [value, ...prevNotes[selectedGroup].slice(1) || []],
      }));
    }
  };
  
  const handleAddNote = () => {
    setNotes((prevNotes) => ({
      ...prevNotes,
      [selectedGroup]: ['', ...(prevNotes[selectedGroup] || [])],
    }));
  };

  return (
    <Wrapper>
      <div className='screen'>
        <div className='index-part'>
          <p className='sticky-element'>Pocket Notes</p>
          <button className='add-button' onClick={openPopup}>+</button>
          <GroupList groups={groups} handleGroupSelection={handleGroupSelection} />
        </div>

        {selectedGroup ? (
          <NoteEditor
            selectedGroup={selectedGroup}
            notes={notes}
            handleNoteChange={handleNoteChange}
            handleAddNote={handleAddNote}
          />
        ) : (
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

        <Popup open={isPopupOpen} onClose={closePopup}>
          <GroupPopup
            isOpen={isPopupOpen}
            closePopup={closePopup}
            groupName={groupName}
            setGroupName={setGroupName}
            handleCreateGroup={handleCreateGroup}
          />
        </Popup>
      </div>
    </Wrapper>
  );
}

export default App;
