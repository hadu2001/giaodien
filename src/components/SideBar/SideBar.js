import { Navbar, Nav, NavIcon, NavItem, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import images from "../../assets/images/image";

const cx = classNames.bind(styles);

function Sidebar() {
  

  return (
    <>
      <Nav
        className={`d-none d-md-block  sidebar ${cx("wrapper")}`}
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
       <div className={cx("sidebar_context")}>
          <div className="sidebar-sticky"></div>
          <Navbar.Brand className={cx("navbar_brand")}>
            <img src={images.avatar} alt="anh"></img>
          </Navbar.Brand>
  
          <div className={cx("context")}>
            <Nav.Item>
              <NavLink to="/home"> <img className={cx("icon_sidebar")} src={images.icon_home} alt="anh"></img></NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink to="/lich"> <img className={cx("icon_sidebar")} src={images.icon_lich} alt="anh"></img></NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink to="/home"> <img className={cx("icon_sidebar")} src={images.icon_chat} alt="anh"></img></NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink to="/home"> <img className={cx("icon_sidebar")} src={images.icon_question} alt="question"></img></NavLink>
            </Nav.Item>
            <Nav.Item>
            <NavLink to="/home"> <img className={cx("icon_sidebar")} src={images.icon_setting} alt="anh"></img></NavLink>
            </Nav.Item>
          </div>
       </div>
      </Nav>
    </>
  );
}

export default Sidebar;
