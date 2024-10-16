import { useEffect, useState } from 'react';
import './dashBoard.css'
import profile from '../assets/profile.jpg';


const DashBoard = () => {

    const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search");

    closeBtn.addEventListener("click", toggleSidebar);
    searchBtn.addEventListener("click", toggleSidebar);

    return () => {
      closeBtn.removeEventListener("click", toggleSidebar);
      searchBtn.removeEventListener("click", toggleSidebar);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  const menuBtnChange = () => {
    const closeBtn = document.querySelector("#btn");
    if (isOpen) {
      closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  };

  useEffect(() => {
    menuBtnChange();
  }, [isOpen]);

  
    return (
        <div>
           <div className={`sidebar ${isOpen ? 'open' : ''}`}>
  <div className="logo_details">
    
    <div className="logo_name">Nomivista</div>
    <i className="bx bx-menu" id="btn"></i>
  </div>
  <ul className="nav-list">
    <li>
      <i className="bx bx-search"></i>
      <input type="text" placeholder="Search..." />
      <span className="tooltip">Search</span>
    </li>
    <li>
      <a href="#">
        <i className="bx bx-grid-alt"></i>
        <span className="link_name">Dashboard</span>
      </a>
      <span className="tooltip">Dashboard</span>
    </li>
    <li>
      <a href="#">
        <i className="bx bx-user"></i>
        <span className="link_name">User</span>
      </a>
      <span className="tooltip">User</span>
    </li>
    <li>
      <a href="#">
        <i className="bx bx-chat"></i>
        <span className="link_name">Message</span>
      </a>
      <span className="tooltip">Message</span>
    </li>
    <li>
      <a href="#">
        <i className="bx bx-pie-chart-alt-2"></i>
        <span className="link_name">Analytics</span>
      </a>
      <span className="tooltip">Analytics</span>
    </li>
    <li>
      <a href="#">
        <i className="bx bx-folder"></i>
        <span className="link_name">File Manager</span>
      </a>
      <span className="tooltip">File Manager</span>
    </li>
    <li>
      <a href="#">
        <i className="bx bx-cart-alt"></i>
        <span className="link_name">Order</span>
      </a>
      <span className="tooltip">Order</span>
    </li>
    <li>
      <a href="#">
        <i className="bx bx-cog"></i>
        <span className="link_name">Settings</span>
      </a>
      <span className="tooltip">Settings</span>
    </li>
    <li className="profile">
      <div className="profile_details">
        <img src={profile} alt="profile image" />
        <div className="profile_content">
          <div className="name">Mazharul Islam</div>
          <div className="designation">Admin</div>
        </div>
      </div>
      <i className="bx bx-log-out" id="log_out"></i>
    </li>
  </ul>
</div>
<section className="home-section">
  <div className="text">Dashboard</div>
</section>

        </div>
    );
};

export default DashBoard;