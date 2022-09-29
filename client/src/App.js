import React from 'react';
import { AppBar } from '@material-ui/core';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';



const App = () => {

  return (
    <div >
      <AppBar position='relative' color='grey'>
    <div className='header'>
   
      <Sidebar>
        <Notifications />
      </Sidebar>
    </div>
    </AppBar>
    <div>
       
      <VideoPlayer />
      
      
    </div>
    </div>
  );
};

export default App;
