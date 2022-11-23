import React from 'react'
import Sidebar from './Sidebar'

const Base = (props) => {
  return (
    <>
      <div className="base-section d-flex">
        <div className='Sidebar-content'>
          <Sidebar />
        </div>
        <div className='Main-content'>
            {props.children}
        </div>
      </div>
    </>
  )
}

export default Base
