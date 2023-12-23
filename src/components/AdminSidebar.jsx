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
                  YOUR LOGO!..
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>
            <SubMenu defaultOpen label={"Users"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/admin">Admin</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/teachers">Teacher</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/students">Student</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/parents">Parent</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/accountant">Accountant</Link></MenuItem>
              <MenuItem icon={<RiUserFollowLine />}><Link to="/admin/librarian">Librarian</Link></MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Examinations"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}><Link to="/admin/exam-category">Exam Category</Link></MenuItem>
              <MenuItem icon={<RiPlantLine />}><Link to="/admin/admin">Junior Students</Link></MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default AdminSidebar;
