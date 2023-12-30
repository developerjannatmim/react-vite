import "./../assets/css/sidedar.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiFolder2Line,
  RiUserFollowLine,
  RiStackLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar";
import { Link } from 'react-router-dom';

import { FaBusAlt } from "react-icons/fa";
import { IoBus } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { VscDebugBreakpointConditional } from "react-icons/vsc";
import { IoMdImages } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { ImBackward } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import logo from "./../assets/images/image.jpg";

const TeacherSidebar = () => {
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
      style={{ backgroundColor: '#0b093b', color: 'white' }}
        // className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute" }}
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
                    padding: "9px",
                    //textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                  <img src={logo} width="70px" height="70px" style={{marginTop: '40px', borderRadius: '50px'}}/>
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<RiHome4Line />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/dashboard">Dashboard</Link></MenuItem>
            <SubMenu defaultOpen label={"Users"} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<RiTeamLine />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<RiUserFollowLine />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/teachers">Teachers</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<RiUserFollowLine />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/students">Students</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<RiUserFollowLine />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/parents">Parents</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Examinations"} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaFileInvoice />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/exam-category">Exam Category</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/exams">Offline Exams</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/marks">Marks</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/grades">Grades</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Academic"} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaBookReader />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/classes">Class List</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/routines">Class Routine</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/classroom">Class Room</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/subject/view">Subjects</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/sections">Sections</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<VscDebugBreakpointConditional />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/syllabuses">Syllabus</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Transport"} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaBusAlt />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaUserFriends />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/driver">Driver</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<IoBus />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/vehicles">Vehicle</Link></MenuItem>
            </SubMenu>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<IoMdImages />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/gallery">Gallery</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<MdEventNote />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/event">Events</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaBook />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/backOffice">List of Books</Link></MenuItem>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<FaChalkboardTeacher />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/notice">Notices</Link></MenuItem>
            <SubMenu defaultOpen label={"Settings"} style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<IoIosSettings />}>
              <MenuItem style={{ backgroundColor: '#0b093b', color: 'white' }} icon={<MdManageAccounts />}><Link style={{ backgroundColor: '#0b093b', color: 'white' }} to="/teacher/profile">My Account</Link></MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default TeacherSidebar;
