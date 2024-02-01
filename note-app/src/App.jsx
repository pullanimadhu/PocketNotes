// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GroupList from './GroupList';
import NoteEditor from './NoteEditor';
import GroupPopup from './GroupPopup';
import ReactDOM from 'react-dom/client';


const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

// localStorage.setItem('groups',JSON.stringify( []));
// localStorage.setItem('notes',JSON.stringify( {}));
// localStorage.setItem('color',JSON.stringify( {}));
// localStorage.setItem('date',JSON.stringify( {}));

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState(JSON.parse(localStorage.getItem('groups')) || []);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')));
  const [color, setColor] = useState(JSON.parse(localStorage.getItem('color'))); 
  const [date, setDate]=useState(JSON.parse(localStorage.getItem('date')))

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setGroupName('');
  };

  const handleCreateGroup = (SlectedColor, name) => {
    setColor((color)=>({...color,[name] :SlectedColor}))
    localStorage.setItem('color',JSON.stringify({...color,[name] :SlectedColor}))
    // console.log(color);
    if (name.trim() !== '') {
      setGroups([...groups, name]);
      localStorage.setItem('groups',JSON.stringify([...groups, name]))
      setNotes((prevNotes) => ({ ...prevNotes, [name]: [] }));
      localStorage.setItem('notes',JSON.stringify({ ...notes, [name]: [] }))
      setGroupName(name)
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
      localStorage.setItem('notes',JSON.stringify({
        ...notes,
        [selectedGroup]: [value, ...notes[selectedGroup] || []],
      }))

    } else {
      setNotes((prevNotes) => ({
        ...prevNotes,
        [selectedGroup]: [value, ...prevNotes[selectedGroup].slice(1) || []],
      }));
      localStorage.setItem('notes',JSON.stringify({
        ...notes,
        [selectedGroup]: [value, ...notes[selectedGroup].slice(1) || []],
      }))
    }
  };
  
  const handleAddNote = (temp) => {
    setDate((date)=>({...date,[temp]:new Date()}))
    localStorage.setItem('date',JSON.stringify({...date,[temp]:new Date()}))
    setNotes((prevNotes) => ({
      ...prevNotes,
      [selectedGroup]: [temp, ...(prevNotes[selectedGroup] || [])],
    }));
    localStorage.setItem('notes',JSON.stringify({
      ...notes,
      [selectedGroup]: [temp, ...(notes[selectedGroup] || [])],
    }))
  };
console.log('hi', date)
  return (
    <Wrapper>
      <div className='screen'>
        <div className='index-part'>
          <span className='sticky-element'>Pocket Notes</span>
          <button className='add-button' onClick={openPopup}>+</button>
          <GroupList groups={groups} handleGroupSelection={handleGroupSelection} selectedColor={color} />            </div>

        {selectedGroup ? (
          <NoteEditor
            selectedGroup={selectedGroup}
            notes={notes}
            handleNoteChange={handleNoteChange}
            handleAddNote={handleAddNote}
            date={date}
            selectedColor={color[selectedGroup]} 
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
            handleCreateGroup={handleCreateGroup}
          />
        </Popup>
      </div>
    </Wrapper>
  );
}




// App.jsx

const MobileApp = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 600);
  const [isNewTrailVisible, setIsNewTrailVisible] = useState(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleGroupSelection = () => {
    setIsNewTrailVisible(!isNewTrailVisible);
  };

  return (
    <React.StrictMode>
      {isMobileView ? (
        // Render mobile view components
        <div>
          <button onClick={handleGroupSelection}>Toggle New Trail</button>
          {isNewTrailVisible && <div className="new-trail">New Trail Content</div>}
        </div>
      ) : (
        // Render the regular app
        <App />
      )}
    </React.StrictMode>
  );
};

export default App;
