import './../assets/css/sidedar.css';
import React, { useState } from 'react';
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine
} from 'react-icons/ri';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi/';
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FaBusAlt } from 'react-icons/fa';
import { IoBus } from 'react-icons/io5';
import { FaUserFriends } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaFileInvoice } from 'react-icons/fa';
import { FaBookReader } from 'react-icons/fa';
import { VscDebugBreakpointConditional } from 'react-icons/vsc';
import { IoMdImages } from 'react-icons/io';
import { MdEventNote } from 'react-icons/md';
import { MdOutlineAssignmentInd } from 'react-icons/md';
import { FaBook } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { MdManageAccounts } from 'react-icons/md';
import logo from './../assets/images/image.jpg';
import { IoIosSettings } from 'react-icons/io';

const StudentSidebar = () => {
  //const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className="pe-6 d-flex min-vh-100">
      <Sidebar
        // className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: '100%', position: 'absolute' }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main style={{ backgroundColor: '#0b093b', color: 'white' }}>
          <Menu>
            {collapsed ? (
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    backgroundColor: '#0b093b',
                    color: 'white',
                    padding: '9px',
                    //textTransform: "uppercase",
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px'
                  }}
                >
                  <img
                    src={logo}
                    width="70px"
                    height="70px"
                    style={{ marginTop: '40px', borderRadius: '50px' }}
                  />
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<RiHome4Line />}>
              <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/dashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<RiUserFollowLine />}>
              <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/teachers">Teachers</Link>
            </MenuItem>
            <SubMenu
              defaultOpen
              label={'Examinations'}
              style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaFileInvoice />}
            >
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/exams">Offline Exams</Link>
              </MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/marks">Marks</Link>
              </MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/grades">Grades</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={'Academic'} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaBookReader />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/classes">Class List</Link>
              </MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/routines">Class Routine</Link>
              </MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/subject/view">Subjects</Link>
              </MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/syllabuses">Syllabus</Link>
              </MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={'Transport'} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaBusAlt />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaUserFriends />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/driver">Driver</Link>
              </MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<IoBus />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/vehicles">Vehicle</Link>
              </MenuItem>
            </SubMenu>
            <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<IoMdImages />}>
              <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/gallery">Gallery</Link>
            </MenuItem>
            <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<MdEventNote />}>
              <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/event">Events</Link>
            </MenuItem>
            <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaBook />}>
              <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/backOffice">List of Books</Link>
            </MenuItem>
            <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaChalkboardTeacher />}>
              <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/notice">Notices</Link>
            </MenuItem>
            <SubMenu defaultOpen label={'Settings'} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<IoIosSettings />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<MdManageAccounts />}>
                <Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/student/profile">My Account</Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
};
export default StudentSidebar;
