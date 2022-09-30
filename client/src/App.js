import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/Sidebar';
import Notifications from './components/Notifications';

const App = () => {
  

  return (
    <div id='header'>
      <div className='sidebar' position="static" color="inherit">
        <h1 className='text'> • Live </h1>
        <div className='callbox'>
      <Sidebar>
        <div className='notifications'>
        <Notifications />
        </div>
      </Sidebar>
      </div>
      </div>
      <div className='vidbox'>
      <VideoPlayer />
      </div>
    </div>
  );
};

export default App;
