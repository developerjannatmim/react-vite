import "./../assets/css/sidedar.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiFolder2Line,
  RiUserFollowLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { FiUserPlus } from "react-icons/fi";
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
import { FaSchoolFlag } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import logo from "./../assets/images/image.jpg";

import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from "react-pro-sidebar";
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
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
            <MenuItem icon={<RiHome4Line />}><Link to="/admin/dashboard">Dashboard</Link></MenuItem>
            <SubMenu defaultOpen label={"Users"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/admin">Admin</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/teachers">Teacher</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/students">Student</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/parents">Parent</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/accountant">Accountant</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/librarian">Librarian</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<FiUserPlus />}><Link to="/admin/admission">Admissions</Link></MenuItem>
            <SubMenu defaultOpen label={"Examinations"} icon={<FaFileInvoice />}>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/exam-category">Exam Category</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/exams">Offline Exams</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/marks">Marks</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/grades">Grades</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Academic"} icon={<FaBookReader />} >
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/classes">Class List</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/routines">Class Routine</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/classroom">Class Room</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/subject/view">Subjects</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/sections">Sections</Link></MenuItem>
              <MenuItem icon={<VscDebugBreakpointConditional/>}><Link to="/admin/syllabuses">Syllabus</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Transport"} icon={<FaBusAlt />}>
              <MenuItem icon={<FaUserFriends />}><Link to="/admin/driver">Driver</Link></MenuItem>
              <MenuItem icon={<IoBus />}><Link to="/admin/vehicles">Vehicle</Link></MenuItem>
              <MenuItem icon={<FaPlus />}><Link to="/admin/assignStudents">Assign Students</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Alumni"} icon={<RiFolder2Line />}>
              <MenuItem icon={<FaUserFriends />}><Link to="/admin/manage-alumni">Manage Alumni</Link></MenuItem>
              <MenuItem icon={<IoMdImages />}><Link to="/admin/gallery">Gallery</Link></MenuItem>
              <MenuItem icon={<MdEventNote />}><Link to="/admin/event">Events</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<MdOutlineAssignmentInd />}><Link to="/admin/assignments">Assignments</Link></MenuItem>
            <SubMenu defaultOpen label={"Back Office"} icon={<ImBackward />}>
              <MenuItem icon={<FaBook />}><Link to="/admin/backOffice">Book List Manager</Link></MenuItem>
              <MenuItem icon={<FaChalkboardTeacher />}><Link to="/admin/noticeboard">Noticeboard</Link></MenuItem>
              <MenuItem icon={<MdEventNote />}><Link to="/admin/event">Events</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Human Resource"} icon={<GrResources />}>
              <MenuItem icon={<FaUserEdit />}><Link to="/admin/userRoles">User Role</Link></MenuItem>
              <MenuItem icon={<FaUsers />}><Link to="/admin/users">User List</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Settings"} icon={<IoIosSettings />}>
              <MenuItem icon={<FaSchoolFlag />}><Link to="/admin/settings/school-info">School Settings</Link></MenuItem>
              <MenuItem icon={<MdManageAccounts />}><Link to="/admin/profile">My Account</Link></MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default AdminSidebar;
