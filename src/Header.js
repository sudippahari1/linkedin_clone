import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



function Header() {
  return (
    <div className="header">
    

      <div className="header_left">

        <img src="https://cdn-icons.flaticon.com/png/512/2504/premium/2504923.png?token=exp=1652442949~hmac=adf24ab45a8bc1b99f190c9edb25a32e" alt="" />

        
        
        {/* search icon */}
        <div className="header_search">
            <SearchIcon/>
            <input type="text" />
        </div>
      </div>

      
      
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='https://lh3.googleusercontent.com/ogw/ADea4I60vvWqe50T4_fAbP1pGX7J3pOx3ZCAw_ALL5uUpg=s32-c-mo' title='me'/>
      </div>
    </div>
  );
}

export default Header;
