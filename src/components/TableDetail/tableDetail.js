import classNames from "classnames/bind";
import styles from "./tableDetal.module.scss";


const cx = classNames.bind(styles);

function TableDetail({data}) {
    return ( 
        <>
        <div className={cx("row","TableDetail")}>
          <div className={cx("text-col","text-sm-left  text-center text-md-left text-col  col-3")}>
            {data.name}
          </div>
          <div className={cx("text-col", "text-sm-left  text-center text-md-left text-col  col-3")}>
          {data.day}
          </div>
          <div className={cx("text-col", "text-sm-left  text-center text-md-left text-col  col-3")}>
          {data.ten}
          </div>
          <div className={cx("text-col", "text-sm-left  text-center text-md-left text-col  col-3")}>
          {data.job}
          </div>
      </div>
      </>
    );
}

export default TableDetail;