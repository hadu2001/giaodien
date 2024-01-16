import DragDropFiles from "./DragDropFiles";
import SortableList from "./SortableList";
import classNames from "classnames/bind";
import styles from "./upload.module.scss";

const cx = classNames.bind(styles);

function Upload() {
    return ( 
       <div className={cx("container")}>
          
            <DragDropFiles />
        </div>
  
 );
}

export default Upload;