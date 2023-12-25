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
                  YOUR LOGO!..
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
            <SubMenu defaultOpen label={"Examinations"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/exam-category">Exam Category</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/exams">Offline Exams</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/marks">Marks</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/grades">Grades</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Academic"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/classes">Class List</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/routines">Class Routine</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/classroom">Class Room</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/subject/view">Subjects</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/sections">Sections</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/syllabuses">Syllabus</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Transport"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/driver">Driver</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/vehicles">Vehicle</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/assignStudents">Assign Students</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Alumni"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/manage-alumni">Manage Alumni</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/gallery">Gallery</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/event">Events</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<RiHome4Line />}><Link to="/teacher/assignments">Assignments</Link></MenuItem>
            <SubMenu defaultOpen label={"Back Office"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/backOffice">Book List Manager</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/noticeboard">Noticeboard</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/event">Events</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Human Resource"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/userRoles">User Role</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/users">User List</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Settings"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/teacher/settings/school-info">School Settings</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/teacher/profile">My Account</Link></MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default TeacherSidebar;
