import classNames from "classnames/bind";
import styles from "./tableItem.module.scss";

const cx = classNames.bind(styles);

function TableItem({ data }) {
  return (
    <>
      <div className={cx("row", "mt-3")}>
        <div
          className={cx(
            "text-col",
            "text-sm-left mb-3 text-center text-md-left text-col  col-6"
          )}
        >
          Dữ liệu
        </div>
        <div
          className={cx(
            "text-col",
            "text-sm-left mb-3 text-center text-md-left text-col  col-6"
          )}
        >
          Tổng
        </div>
      </div>
      {data.map((data, index) => {return(
        <div key={index} className={cx("row", "tableItem")}>
        <div
          className={cx(
            "text-col",
            "text-sm-left  text-center text-md-left text-col  col-6"
          )}
        >
          {data.name}
        </div>
        <div
          className={cx(
            "text-col",
            "text-sm-left  text-center text-md-left text-col  col-6"
          )}
        >
          {data.total}
        </div>
      </div>
      )}) }
     
    </>
  );
}

export default TableItem;
