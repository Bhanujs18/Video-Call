import React, { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { SocketContext } from '../Context';

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
 

  return (
    <Grid  className='videoplayerdiv'>
      {stream && (
        
          <Grid >
            <Typography variant="h5" className='text' >{name || 'user1'}</Typography>
            <video id='videoplayerbox' playsInline muted ref={myVideo} autoPlay  />
          </Grid>
        
      )}
      {callAccepted && !callEnded && (
        
          <Grid >
            <Typography variant="h5" className='text' >{call.name || 'user2'}</Typography>
            <video id='videoplayerbox' playsInline ref={userVideo} autoPlay />
          </Grid>
        
      )}
    </Grid>
  );
};

export default VideoPlayer;
