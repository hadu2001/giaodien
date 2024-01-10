import classNames from "classnames/bind";
import styles from "./context.module.scss";
import images from "../../assets/images/image";
import TableItem from "../../components/Table/tableItem";
import TableDetail from "../../components/TableDetail/tableDetail";
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
    ten:"Tuan",
    job:"Cv1"
  },
  {
    name: "Lansand8",
    day: "10/2/2021",
    ten:"Tuan",
    job:"Cv1"
  },
  {
    name: "UAV",
    day: "10/2/2021",
    ten:"Tuan",
    job:"Cv1"
  },
  {
    name: "Sentinel 1A",
    day: "10/2/2021",
    ten:"Tuan",
    job:"Cv1"
  },
  
];
function Context() {
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


 
      <div  className={`${cx(  "content_table"  )} container page-header no-gutters row`}  >
         {/* table small */}
        <div className="text-sm-left mb-3  text-md-left mb-sm-0 col-12 col-sm-4">
          <div className={cx("row","mt-3")}>
            <div className={cx(  "text-col",  "text-sm-left mb-3 text-center text-md-left text-col  col-6"  )} >
              Dữ liệu
            </div>
            <div  className={cx( "text-col", "text-sm-left mb-3 text-center text-md-left text-col  col-6"  )} >
              Tổng
            </div>
          </div>
          {datatable.map((data,index)=>{
            return(
              <TableItem key={index} data={data}></TableItem>
            )
          })}
          
        </div>
         {/* table Detail */}
        <div  className={cx("tableDetail" , "text-sm-left mb-3   text-md-left mb-sm-0 col-12 col-sm-6" )}>
        <div className={cx("row ","mt-3 ")}>
            <div className={cx(  "text-col",  "text-sm-left mb-3 text-center text-md-left text-col  col-3"  )} >
              Loại dữ liệu
            </div>
            <div  className={cx( "text-col", "text-sm-left mb-3 text-center text-md-left text-col  col-3"  )} >
              Ngày cập nhật
            </div>
            <div  className={cx( "text-col", "text-sm-left mb-3 text-center text-md-left text-col  col-3"  )} >
              Người cập nhật
            </div>
            <div  className={cx( "text-col", "text-sm-left mb-3 text-center text-md-left text-col  col-3"  )} >
              Công việc
            </div>
          </div>
          {datatableDetail.map((data,index)=>{
            return(
              <TableDetail key={index} data={data}></TableDetail>
            )
          })}
             
        </div>
      </div>


      <div className={`${cx("footer")} page-header no-gutters `}>
        <div className={cx("row ","mt-2 ")}>
          <div className="text-sm-left mb-3  text-md-left mb-sm-0 col-12 col-sm-4">
            <img className={cx("test_image")} src={images.testImage} alt="" />
          </div>
          <div className="text-sm-left mb-3  text-md-left mb-sm-0 col-12 col-sm-4">
            <img className={cx("test_image")} src={images.testImage} alt="" />
          </div>
          <div className="text-sm-left mb-3  text-md-left mb-sm-0  col-12 col-sm-4">
            <img className={cx("test_image")} src={images.testImage} alt="" />
          </div>
        </div>
        
        </div>
    </div>
  );
}
export default Context;
