// NoteEditor.jsx
import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import './NoteEditor.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  width:74
  margin: 10px;
  max-height: 60vh; /* Set a fixed height for scrolling */
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;




const NoteEditor = ({ selectedGroup, notes, handleAddNote, date }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      handleAddNote(inputText);
      setInputText('');
      console.log('Updated notes:', notes);
    }
  };
  const formatDateString = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleString('en-US', options);
    return formattedDate;
  };


  return (
    <Wrapper>
      <div className="new-trail" style={{backgroundColor:'#DAE5F5'}}>
        <div className="new-trail-a">


      <h1 className='heading-display' style={{color:'#FFFFFF'}}>{selectedGroup || 'Pocket Notes'}</h1>
      <div className='container-a'>

      {notes[selectedGroup]?.slice().reverse().map((message, index) => (
        <div className="box">
          
        <li style={{listStyleType:'none', textAlign:'left'}}>
          {message}
        </li>
        <li style={{listStyleType:'none', textAlign:'right'}}>
        {formatDateString(date[message])}
        </li>
        </div>
      ))}

        </div>
        </div>
      {/* <ChatContainer className='text-display' style={{height:'40vh',width:'74vw'}} selectedGroup={selectedGroup}>
        <Grid container spacing={4}>
        {selectedGroup &&
          notes[selectedGroup]?.slice().reverse().map((message, index) => (
            // <div key={index}>{message}</div>
            <Box 
            sx={{
              bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
              color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              p: 1,
              borderRadius: 1,
              textAlign: 'center',
              fontSize: '15px',
              fontWeight: '500',
              padding :'10px',
             }}>{message}</Box>
          ))}
          </Grid>
      </ChatContainer> */}
      <div className="new-trail-b">

      {selectedGroup && (
        <InputContainer>

        <div className="input-send">
        <textarea value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..." className='input-text' name="input" id="" cols="30" rows="10"></textarea>
        <button className='note-submit' onClick={handleSend}>
        <img src="/images/send-icon.svg" alt="hbhbjbjbh" />
        </button>

            </div>
          
        </InputContainer>
      )}
      </div>
      </div>
    </Wrapper>
  );
};

export default NoteEditor;
