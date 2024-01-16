import {Navbar,Container,Nav,NavDropdown,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AccountHeader from '../AccountHeader/AcountHeader';
import images from '../../assets/images/image';

const cx=classNames.bind(styles)


function Header() {
    return (  
    <>
      <Navbar expand="md" className={`${cx("wrap")} shadow-sm` }>  
          <Container>  
            <Navbar.Toggle aria-controls="basic-navbar-nav"  className={cx("custom-color")}/>  
            
            <Navbar.Collapse id="basic-navbar-nav me-auto">
              <Nav className={cx("navbar_nav")} style={{color:'#333'}}>
                <Nav.Link as={NavLink} to="/" className={`${cx("ht_geo")}` } >
                <img src={images.logo} alt="Ht-geo" />
                </Nav.Link>
                <Nav.Link as={NavLink} to="/upload" className={`${cx("nav_item")} ` }>Công việc</Nav.Link>
                <Nav.Link as={NavLink} to="/main" className={`${cx("nav_item")} ` }>Dữ liệu</Nav.Link>
                <Nav.Link as={NavLink} to="/mains" className={`${cx("nav_item")} ` }>Truy vẫn dữ liệu</Nav.Link>
                <Nav.Link as={NavLink} to="/aboult" className={`${cx("nav_item")} ` }>Trợ giúp</Nav.Link>
              </Nav>
            </Navbar.Collapse> 
            
            <Navbar.Brand className={cx("Navbar_brand")}>
              <AccountHeader></AccountHeader>
              <NavDropdown title={<span><img src={images.avatar}></img></span>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                      Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                      Separated link
                  </NavDropdown.Item>
              </NavDropdown>
            </Navbar.Brand>  

          </Container>  
        </Navbar>  
    </>
  );
}

export default Header;

