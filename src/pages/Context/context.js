import classNames from "classnames/bind";
import styles from "./context.module.scss";
import images from "../../assets/images/image";
import TableItem from "../../components/Table/tableItem";
import TableDetail from "../../components/TableDetail/tableDetail";
import BarChart from '../../components/chart/BarChart'
import   {UserData,UserDataPir,UserDataTheoThang} from '../../FixData/data'
import {useState} from 'react'
import LineChart from "../../components/chart/LineChart";
import PieChart from "../../components/chart/PiaChart";
 

const cx = classNames.bind(styles);
const datatable = [
  {
    name: "Sentinel 2A",
    total: "1.2TB",
  },
  {
    name: "Lansand8",
    total: "1.2TB",
  },
  {
    name: "UAV",
    total: "1.2TB",
  },
  {
    name: "Sentinel 1A",
    total: "1.2TB",
  },
];
const datatableDetail = [
  {
    name: "Sentinel 2A",
    day: "10/2/2021",
    ten: "Tuan",
    job: "Cv1",
  },
  {
    name: "Lansand8",
    day: "10/2/2021",
    ten: "Tuan",
    job: "Cv1",
  },
  {
    name: "UAV",
    day: "10/2/2021",
    ten: "Tuan",
    job: "Cv1",
  },
  {
    name: "Sentinel 1A",
    day: "10/2/2021",
    ten: "Tuan",
    job: "Cv1",
  },
];
function Context() {
  const [indexData,setIndexDat]=useState(1)
  const handleNavChange=(index)=>{
    
    setIndexDat(index);
  }
  return (
    <div className={`${cx("wrapper")}  `}>
      <div
        className={`${cx(
          "header"
        )} page-header no-gutters text-sm-left mb-3  text-md-left mb-sm-0 col-12 col-sm-4`}
      >
        <div className={cx("title")}>Thêm mới công việc</div>
        <p>Tạo mới nhóm công việc theo nhóm nhiệm vụ khác nhau</p>
        <div className={cx("icon_text")}>
          {" "}
          <img src={images.icon_add} alt="add" /> <p>Tạo công việc mới</p>
        </div>
      </div>

      <div
        className={`${cx(
          "content_table"
        )} container page-header no-gutters row`}
      >
        {/* table small */}
        <div className="text-sm-left mb-3  text-md-left mb-sm-0 col-12 col-sm-4">
         <TableItem  data={datatable}></TableItem>;
          
        </div>
        {/* table Detail */}
        <div
          className={cx(
            "tableDetail",
            "text-sm-left mb-3   text-md-left mb-sm-0 col-12 col-sm-6"
          )}
        >
          <TableDetail data={datatableDetail}></TableDetail>
        
        </div>
      </div>

      <div className={`${cx("footer")} page-header no-gutters `}>
        <div className={cx("row", "mt-2")}>
          {/* <div className="text-sm-left mb-3  text-md-left mb-sm-0 col-12 col-sm-4">
                <img className={cx("test_image")} src={images.testImage} alt="" />
              </div>
              <div className="text-sm-left mb-3  text-md-left mb-sm-0 col-12 col-sm-4">
                <img className={cx("test_image")} src={images.testImage} alt="" />
              </div>
              <div className="text-sm-left mb-3  text-md-left mb-sm-0  col-12 col-sm-4">
                <img className={cx("test_image")} src={images.testImage} alt="" />
              </div> */}
          <div className={cx("charBar", "text-sm-left mb-3   text-md-left mb-sm-3 col-12 col-sm-4")}>
              <BarChart chartData={indexData===1  ?  UserDataTheoThang:  UserData}  onNavChange={handleNavChange}></BarChart>
          </div>
          <div className={cx("charline", "text-sm-left  mb-3  text-md-left mb-sm-3 col-12 col-sm-4")}>
              <LineChart chartData={UserDataTheoThang}  onNavChange={handleNavChange}></LineChart>
          </div>
          <div className={cx("charPia", "text-sm-left  mb-3  text-md-left mb-sm-3 col-12 col-sm-3")}>
              <PieChart chartData={UserDataPir}  onNavChange={handleNavChange}></PieChart>
          </div>
        
        </div>
      </div>
    </div>
  )
}
export default Context;




// <Bar
// data={{
//   labels: [
//     "Africa",
//     "Asia",
//     "Europe",
//     "Europe",
//     "Europe",
//     "Latin America",
//     "North America",
//   ],

//   datasets: [
//     {
//       tension: 0.4,
//       borderWidth: 0,
//       borderRadius: 5,
//       maxBarThickness: 10,
//       label: "Bảng",
//       backgroundColor: [
//         "#fff",
//         "#8e5ea2",
//         "#3cba9f",
//         "#e8c3b9",
//         "#c45850",
//       ],
//       data: [2478, 5267, 734, 784, 433, 434, 232, 323],
//     },
//   ],
// }}
// options={{
//   responsive: true,

//   interaction: {
//     intersect: false,
//     mode: "index",
//   },
//   legend: { display: false },
//   title: {
//     display: true,
//     text: "Predicted world population (millions) in 2050",
//   },
//   scales: {
//     y: {
//       grid: {
//         color: "rgba(255, 255, 255, .2)",
//       },
//       ticks: {
//         color: "#fff",
//       },
//     },
//     x: {
//       grid: {                    
//         color: "rgba(255, 255, 255, .2)",
//       },
//       ticks: {
//           color: "red",
       
//       },
//     },
//   },
// }}
// />
