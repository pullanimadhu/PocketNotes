// StyledComponents.js
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: calc(100% - 40px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #d3d3d3;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const SendButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;

// ... Other styled components
