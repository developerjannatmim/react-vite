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
                  YOUR LOGO!..
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>
            <MenuItem icon={<RiUserFollowLine />}><Link to="/student/teachers">Teachers</Link></MenuItem>
            <SubMenu defaultOpen label={"Examinations"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/exams">Offline Exams</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/marks">Marks</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/grades">Grades</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Academic"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/routines">Class Routine</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/subject/view">Subjects</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/syllabuses">Syllabus</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Transport"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/student/driver">Driver</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/vehicles">Vehicle</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/assignStudents">Assign Students</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Alumni"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/student/manage-alumni">Manage Alumni</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/gallery">Gallery</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/event">Events</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<RiHome4Line />}><Link to="/student/assignments">My Assignments</Link></MenuItem>
            <SubMenu defaultOpen label={"Back Office"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/student/backOffice">List of Books</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/noticeboard">Noticeboard</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/student/event">Events</Link></MenuItem>
            </SubMenu>
            <MenuItem icon={<RiPlantLine />}><Link to="/student/profile">My Account</Link></MenuItem>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default StudentSidebar;
