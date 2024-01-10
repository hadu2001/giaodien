import classNames from 'classnames/bind';
import styles from './AccountHeader.module.scss'
const cx=classNames.bind(styles);

function AccountHeader() {
    return ( 
        <div  className={cx("acount_item")}>
            <h3  style={{color:"#FFFFFF"}}>Admin</h3>
            <p className={cx("p")} style={{color:"#ADB9D8"}}>Quản trị viên</p>
      </div>
     );
}

export default AccountHeader;