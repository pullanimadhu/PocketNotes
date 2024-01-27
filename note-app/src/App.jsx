import { useState } from 'react';
import './App.css'
import styled from 'styled-components';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';




const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

// const [item,setItem]=useState([])
const YourComponent = () => {
  const [groupName, setGroupName] = useState('');

  const addGroup = (name) => {
    // Save the group details to local storage or perform any other desired action.
    // localStorage.setItem('groupName', groupName);
    console.log(name)
    // Close the modal
    closePopup();
  };
}

function App() {
  return (
    <Wrapper>
    <div className='screen'>

      <div className='index-part'>
      <p className='sticky-element'>Pocket Notes</p>
      
                        
      {/* custom component mynote */}
      <div className='note-subject'>

      </div>
      </div>





      <div className="card">
      
        <span><img className='note_image' src="/images/home image.svg" alt="imah" /></span>
        <span className='logo-heading'>Pocket Notes</span>
        <span className='logo-text'>Send and receive messages without keeping your phone online. <br />Use Pocket Notes on up to 4 linked devices and 1 mobile phone</span>
         
        <div className='footer-text'>
          <div className='footer' ><img className='lock-image' src="/images/lock.svg" alt="security symbol" /> end-to-end encrypted
            </div> 
            </div>
      </div>
    </div>
    </Wrapper>
  )
}

export default App
