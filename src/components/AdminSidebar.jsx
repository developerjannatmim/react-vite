import './../assets/css/sidedar.css';
import React, { useState } from 'react';
import {
  RiHome4Line,
  RiTeamLine,
  RiFolder2Line,
  RiUserFollowLine
} from 'react-icons/ri';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi/';
import { FiUserPlus } from 'react-icons/fi';
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
import { ImBackward } from 'react-icons/im';
import { FaUsers } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';
import { GrResources } from 'react-icons/gr';
import { IoIosSettings } from 'react-icons/io';
import { FaSchoolFlag } from 'react-icons/fa6';
import { MdManageAccounts } from 'react-icons/md';
import logo from './../assets/images/image.jpg';

import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem
  //useProSidebar
} from 'react-pro-sidebar';
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
            <MenuItem
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              icon={<RiHome4Line />}
            >
              <Link
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                to="/admin/dashboard"
              >
                Dashboard
              </Link>
            </MenuItem>
            <SubMenu
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              defaultOpen
              label={'Users'}
              icon={<RiTeamLine />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<RiUserFollowLine />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/admin"
                >
                  Admin
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<RiUserFollowLine />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/teachers"
                >
                  Teacher
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<RiUserFollowLine />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/students"
                >
                  Student
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<RiUserFollowLine />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/parents"
                >
                  Parent
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<RiUserFollowLine />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/accountant"
                >
                  Accountant
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<RiUserFollowLine />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/librarian"
                >
                  Librarian
                </Link>
              </MenuItem>
            </SubMenu>
            <MenuItem
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              icon={<FiUserPlus />}
            >
              <Link
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                to="/admin/admission"
              >
                Admissions
              </Link>
            </MenuItem>
            <SubMenu
              defaultOpen
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              label={'Examinations'}
              icon={<FaFileInvoice />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/exam-category"
                >
                  Exam Category
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/exams"
                >
                  Offline Exams
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/marks"
                >
                  Marks
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/grades"
                >
                  Grades
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              label={'Academic'}
              icon={<FaBookReader />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/classes"
                >
                  Class List
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/routines"
                >
                  Class Routine
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/classroom"
                >
                  Class Room
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/subject/view"
                >
                  Subjects
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/sections"
                >
                  Sections
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<VscDebugBreakpointConditional />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/syllabuses"
                >
                  Syllabus
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              label={'Transport'}
              icon={<FaBusAlt />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FaUserFriends />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/driver"
                >
                  Driver
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<IoBus />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/vehicles"
                >
                  Vehicle
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FaPlus />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/assignStudents"
                >
                  Assign Students
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              label={'Information'}
              icon={<RiFolder2Line />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<IoMdImages />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/gallery"
                >
                  Gallery
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<MdEventNote />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/event"
                >
                  Events
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              label={'Back Office'}
              icon={<ImBackward />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FaBook />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/backOffice"
                >
                  Book List Manager
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FaChalkboardTeacher />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/notice"
                >
                  Notices
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<MdEventNote />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/event"
                >
                  Events
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              label={'Human Resource'}
              icon={<GrResources />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FaUserEdit />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/userRoles"
                >
                  User Role
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FaUsers />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/users"
                >
                  User List
                </Link>
              </MenuItem>
            </SubMenu>
            <SubMenu
              defaultOpen
              style={{ backgroundColor: '#0b093b', color: 'white' }}
              label={'Settings'}
              icon={<IoIosSettings />}
            >
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<FaSchoolFlag />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/settings/school-info"
                >
                  School Settings
                </Link>
              </MenuItem>
              <MenuItem
                style={{ backgroundColor: '#0b093b', color: 'white' }}
                icon={<MdManageAccounts />}
              >
                <Link
                  style={{ backgroundColor: '#0b093b', color: 'white' }}
                  to="/admin/profile"
                >
                  My Account
                </Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
};
export default AdminSidebar;
