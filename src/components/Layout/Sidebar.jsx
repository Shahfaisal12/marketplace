import React from 'react';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ShoppingBagSharpIcon from '@mui/icons-material/ShoppingBagSharp';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-section overflow-auto vh-100">
        <div className="sidebar-header d-flex align-items-center justify-content-center">
          <div className="sidebar-logo">
            <img src="assets/sidebar-icon.svg" alt="" />
          </div>
          <div className="sidebar-title">
            <h5 className='mb-0 text-white'>Crypto Yield</h5>
          </div>
        </div>
        <div className="menu">
          <ul className='p-0'>
            <li>
              <Link to='/' className='d-flex'>
                <HomeSharpIcon fontSize="small" />
                <h6>Home</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
                <ShoppingBagSharpIcon fontSize="small" />
                <h6>Marketplace</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
                <PlayCircleRoundedIcon fontSize="small" />
                <h6>Games</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
                <StarRoundedIcon fontSize="small" />
                <h6>Lunacian Express</h6>
              </Link>
            </li>
            <li>
              <Link to='/' className='d-flex'>
                <NotificationsRoundedIcon fontSize="small" />
                <h6>Events Express</h6>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar