
import Sidebar from './Sidebar'
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';


const Base = (props) => {

  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 280 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='base-section'> 
      <div className='Sidebar-content'>
          <Sidebar />
        </div>
      </div>
    </Box>
  );
  return (
    <>
      <div className="base-section d-flex">
        <div className='Sidebar-content d-none d-md-block'>
          <Sidebar />
        </div>
        <div className='Main-content'>
          <div className="container">
          <div className='mb-2 d-block d-md-none'>
            {['left'].map((anchor) => (
              <React.Fragment key={anchor}>
                <MenuIcon onClick={toggleDrawer(anchor, true)} className='text-white' />
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </React.Fragment>
            ))}
          </div>
          </div>
          {props.children}
        </div>
      </div>

    </>
  )
}

export default Base
