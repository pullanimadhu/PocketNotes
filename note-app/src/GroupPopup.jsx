// GroupPopup.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import styled from 'styled-components';
// import { blue, orange, pink, red, yellow } from '@mui/material/colors';



const GroupPopup = ({ isOpen, closePopup, groupName, setGroupName, handleCreateGroup }) => (
  <div>
    <h2>Create Group</h2>
    <label htmlFor="groupName">Group Name:</label>
    <TextField id="groupname" label="Enter Group name" variant="outlined"  value={groupName} onChange={(e) => setGroupName(e.target.value)}/>
<div styles={{flexDirection:'row'}}>
<label> Choose Colour :</label>
<button className="button1" style={{backgroundColor: 'blue',marginLeft:10,width:25,height:25,borderRadius:15,border:0}} id='b1'></button>
<button className="button1" style={{backgroundColor: 'yellow',marginLeft:10 ,width:25,height:25,borderRadius:15,border:0}} id='b2'></button>
<button className="button1" style={{backgroundColor: 'pink',marginLeft:10 ,width:25,height:25,borderRadius:15,border:0}} id='b3'></button>
<button className="button1" style={{backgroundColor: 'red',marginLeft:10 ,width:25,height:25,borderRadius:15,border:0}} id='b4'></button>
<button className="button1" style={{backgroundColor: 'orange',marginLeft:10,width:25,height:25,borderRadius:15,border:0}} id='b5'></button>
<button className="button1" style={{backgroundColor: 'violet',marginLeft:10 ,width:25,height:25,borderRadius:15,border:0}} id='b6'></button>
</div>
<Button variant="contained" onClick={handleCreateGroup}>Create</Button>
</div>
);



export default GroupPopup;