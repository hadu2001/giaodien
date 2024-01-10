import SideBar from "../../SideBar";
import Header from "../../Header/Header";
import classNames from "classnames/bind";
import styles from './main.module.scss'
import {Context} from "../../../pages";

const cx=classNames.bind(styles)

function MainLayout({children}) {
  return (
    <div className={cx("wrapper")}>
    <Header/>
    <div className={cx("container")}>
        <SideBar></SideBar>
        <div className={cx("content")}>
      
           <div   className={`${cx("container_fix")} container `}>{children}</div>  
        </div>
    </div>
</div>
  );
}

export default MainLayout;
