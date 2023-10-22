import React, {useState} from 'react';
import '../assets/css/SideNavbar.css'

const SideNavbar = () => {
  const [isExpanded, setExpandState] = useState(false);
  const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
		},
		{
			text: "Admin Profile",
			icon: "icons/user.svg",
		},
		{
			text: "Messages",
			icon: "icons/message.svg",
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "File Manager",
			icon: "icons/folder.svg",
		},
		{
			text: "Orders",
			icon: "icons/shopping-cart.svg",
		},
		{
			text: "Saved Items",
			icon: "icons/heart.svg",
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
		},
	];
  return (
    <div
      className={
        isExpanded ? 
        "side-nav-container"
        :
        "side-nav-container side-nav-container-NX"
      }
    >
      <div className='nav-upper'>
        <div className='nav-heading'>
          {
            isExpanded && (
              <div className="nav-brand">
                <img src="icons/Logo.svg" alt="" />
                <h2>Showkart</h2>
              </div>
            )
          }
          <button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpandState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
        </div>
        <div className='nav-menu'>
            {
              menuItems.map(({ text, icon }) => (
                <a key={text}
                  className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                  href="#"
                >
                  <img className="menu-item-icon" src={icon} alt="" />
                  {isExpanded && <p>{text}</p>}
                </a>
              ))
            }
        </div>
      </div>
      <div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" />
			</div>
    </div>
  );
};

export default SideNavbar;
