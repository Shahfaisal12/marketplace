import React from 'react'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
      <div className="d-flex base-section">
        <div className='Sidebar-content'>
          <Sidebar />
        </div>
        <div className='Main-content'>
          <div className="overflow-auto vh-100">
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Base
