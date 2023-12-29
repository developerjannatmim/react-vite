import "./../assets/css/sidedar.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine
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
import { FaBook } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import logo from "./../assets/images/image.jpg";
import { IoIosSettings } from "react-icons/io";

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
        style={{ height: "100%", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
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
            <MenuItem icon={<RiHome4Line />}><Link to="/student/dashboard">Dashboard</Link></MenuItem>
            <MenuItem icon={<RiUserFollowLine />}><Link to="/student/teachers">Teachers</Link></MenuItem>
            <SubMenu defaultOpen label={"Examinations"} icon={<FaFileInvoice />}>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/student/exams">Offline Exams</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/student/marks">Marks</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/student/grades">Grades</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Academic"} icon={<FaBookReader />}>
            <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/student/classes">Class List</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/student/routines">Class Routine</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/student/subject/view">Subjects</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/student/syllabuses">Syllabus</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Transport"} icon={<FaBusAlt />}>
              <MenuItem icon={<FaUserFriends />}><Link to="/student/driver">Driver</Link></MenuItem>
              <MenuItem icon={<IoBus />}><Link to="/student/vehicles">Vehicle</Link></MenuItem>
              <MenuItem icon={<FaPlus />}><Link to="/student/assignStudents">Assign Students</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<IoMdImages />}><Link to="/student/gallery">Gallery</Link></MenuItem>
            <MenuItem icon={<MdEventNote />}><Link to="/student/event">Events</Link></MenuItem>
            <MenuItem icon={<FaBook />}><Link to="/student/backOffice">List of Books</Link></MenuItem>
            <MenuItem icon={<FaChalkboardTeacher />}><Link to="/student/notice">Notices</Link></MenuItem>
            <SubMenu defaultOpen label={"Settings"} icon={<IoIosSettings />}>
              <MenuItem icon={<MdManageAccounts />}><Link to="/student/profile">My Account</Link></MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default StudentSidebar;
