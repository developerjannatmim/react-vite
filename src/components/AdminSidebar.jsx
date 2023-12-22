import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

//import icons from react icons
import { FaList, FaRegHeart } from 'react-icons/fa';
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';

//import 'react-pro-sidebar/dist/css/styles.css';
import './../assets/css/sidedar.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div className="header pe-6 d-flex min-vh-100">
        {/* collapsed props to change menu size using menucollapse state */}
        <Sidebar collapsed={menuCollapse}>
          <div className="logotext">
            {/* small and big change using menucollapse state */}
            <p>{menuCollapse ? 'Logo' : 'Big Logo'}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {/* changing menu collapse icon on click */}
            {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
          </div>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}>
              Home
            </MenuItem>
            <MenuItem icon={<FaList/>}>Users</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Favorite</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default AdminSidebar;
