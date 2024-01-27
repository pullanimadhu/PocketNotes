import React from 'react'
import styled from 'styled-components';
import Popup from 'reactjs'
import 'reactjs-popup/dist/index.css';




const Wrapper = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export default function CreateNotes() {
  return (
    <Wrapper>
         <Popup trigger=
                {<button> add group</button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <li>Grouo name</li>
                            <input type="text" name="groupname" id="" />
                            </div>
                            <div>
                                <button onClick=
                                    {(item) => add()}>
                                        add modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
    </Wrapper>
  )
}
