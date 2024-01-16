import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./upload.module.scss";

const cx = classNames.bind(styles);
const SortableList = () => {
 
  const [dragItemIndex, setDragItemIndex] = useState();
  const [dragOverItemIndex, setDragOverItemIndex] = useState();

  const handleDragStart = index => {
    setDragItemIndex(index)
  };

  const handleDragOver = event => {
    event.preventDefault();
  }



  const handleDragEnter = index => {
    setDragOverItemIndex(index)
  }

  const handleDragLeave = (event) => {
    setDragOverItemIndex(undefined)
  }

  const handleDragEnd = event => {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  }

  return (
    <div>
      <h1>Favorite Sports</h1>
      <div className={cx("list")}>
  
      </div>
    </div>
  );
};

export default SortableList;
