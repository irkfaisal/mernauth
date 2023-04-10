import React from 'react'
import './Header.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Hello world</h1>
          <div className='avatar'> 
            <AccountCircleIcon sx={{ fontSize:"3rem" }}></AccountCircleIcon>
          </div>
        </nav>
      </header>

    </>
  )
}

export default Header