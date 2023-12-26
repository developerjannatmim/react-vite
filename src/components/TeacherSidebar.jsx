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
            <MenuItem icon={<RiHome4Line />}><Link to="/teacher/dashboard">Dashboard</Link></MenuItem>
            <SubMenu defaultOpen label={"Users"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/teacher/teachers">Teachers</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/teacher/students">Students</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/teacher/parents">Parents</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Examinations"} icon={<FaFileInvoice />}>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/exam-category">Exam Category</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/exams">Offline Exams</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/marks">Marks</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/grades">Grades</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Academic"} icon={<FaBookReader />}>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/classes">Class List</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/routines">Class Routine</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/classroom">Class Room</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/subject/view">Subjects</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/sections">Sections</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional />}><Link to="/teacher/syllabuses">Syllabus</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Transport"} icon={<FaBusAlt />}>
              <MenuItem icon={<FaUserFriends />}><Link to="/teacher/driver">Driver</Link></MenuItem>
              <MenuItem icon={<IoBus />}><Link to="/teacher/vehicles">Vehicle</Link></MenuItem>
              <MenuItem icon={<FaPlus />}><Link to="/teacher/assignStudents">Assign Students</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Alumni"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/manage-alumni">Manage Alumni</Link></MenuItem>
              <MenuItem icon={<IoMdImages />}><Link to="/teacher/gallery">Gallery</Link></MenuItem>
              <MenuItem icon={<MdEventNote />}><Link to="/teacher/event">Events</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<MdOutlineAssignmentInd />}><Link to="/teacher/assignments">Assignments</Link></MenuItem>
            <SubMenu defaultOpen label={"Back Office"} icon={<ImBackward />}>
              <MenuItem icon={<FaBook />}><Link to="/teacher/backOffice">List of Books</Link></MenuItem>
              <MenuItem icon={<FaChalkboardTeacher />}><Link to="/teacher/noticeboard">Noticeboard</Link></MenuItem>
              <MenuItem icon={<MdEventNote />}><Link to="/teacher/event">Events</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Human Resource"} icon={<GrResources />}>
              <MenuItem icon={<FaUserEdit />}><Link to="/teacher/userRoles">User Role</Link></MenuItem>
              <MenuItem icon={<FaUsers />}><Link to="/teacher/users">User List</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Settings"} icon={<IoIosSettings />}>
              <MenuItem icon={<MdManageAccounts />}><Link to="/teacher/profile">My Account</Link></MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default TeacherSidebar;
