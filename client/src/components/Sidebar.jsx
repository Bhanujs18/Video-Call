import React, { useState, useContext } from 'react';
import { Button, TextField} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {  Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../Context';


const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
        <div id='header'>
          <div>
            <h1 className='text'>  • Live </h1>
          </div>
        <form noValidate autoComplete="off" className='inputdiv'>
          <div className='input'>
              <TextField label="Name" color='inherit' value={name} onChange={(e) => setName(e.target.value)} />
              <CopyToClipboard text={me} >
                <Button variant="contained" color="inherit" startIcon={<Assignment fontSize="large" />}>
                   Code
                </Button>
              </CopyToClipboard>
              </div>
              <div className='input'>
              <TextField label="Enter Code"  value={idToCall} onChange={(e) => setIdToCall(e.target.value)}  />
              {callAccepted && !callEnded ? (
                <Button variant="contained"  color="secondary" startIcon={<PhoneDisabled fontSize="large" />}  onClick={leaveCall} >
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained"  id='colorcall' startIcon={<Phone fontSize="large" />}  onClick={() => callUser(idToCall)} >
                  Call
                </Button>
                
              )}
              </div>
        </form>
        {children}
        </div>
   
   
  );
};

export default Sidebar;
