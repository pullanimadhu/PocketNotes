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
  height:100
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  margin-bottom: 10px;
  height: ${(props) => (props.selectedGroup ? 'calc(100% - 200px)' : '900px')};
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled.input`
  width: calc(100% - 40px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  margin-top: 10px;
`;


const NoteEditor = ({ selectedGroup, notes, handleAddNote }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      handleAddNote(inputText);
      setInputText('');
      console.log('Updated notes:', notes);
    }
  };

  return (
    <Wrapper>
      <span className='heading-display' style={{color:'#FFFFFF'}}>{selectedGroup || 'Pocket Notes'}</span>
      <ChatContainer className='text-display' style={{height:'40vh',width:'74vw'}} selectedGroup={selectedGroup}>
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
              fontSize: '1.875rem',
              fontWeight: '700',
              padding :'10px',
             }}>{message}</Box>
          ))}
          </Grid>
      </ChatContainer>
      {selectedGroup && (
        <InputContainer>
        <div className="input-send">
        <textarea value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..." className='input-text' name="input" id="" cols="30" rows="10"></textarea>
        <button onClick={handleSend}>
        <img src="/images/send-icon.svg" alt="hbhbjbjbh" />
        </button>

        </div>
          
        </InputContainer>
      )}
    </Wrapper>
  );
};

export default NoteEditor;
