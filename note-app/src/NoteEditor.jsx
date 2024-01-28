// NoteEditor.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

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
  margin-bottom: 10px;
  height: ${(props) => (props.selectedGroup ? 'calc(100% - 20px)' : '150px')};
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

const SendButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

const NoteEditor = ({ selectedGroup, notes, handleAddNote }) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() !== '') {
      handleAddNote();
      setInputText('');
      console.log('Updated notes:', notes);
    }
  };

  return (
    <Wrapper>
      <h2>{selectedGroup || 'Pocket Notes'}</h2>
      <ChatContainer selectedGroup={selectedGroup}>
        {selectedGroup &&
          notes[selectedGroup]?.slice().reverse().map((message, index) => (
            <div key={index}>{message}</div>
          ))}
      </ChatContainer>
      {selectedGroup && (
        <InputContainer>
          <StyledInput
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message..."
          />
          <SendButton onClick={handleSend}>Send</SendButton>
        </InputContainer>
      )}
    </Wrapper>
  );
};

export default NoteEditor;
