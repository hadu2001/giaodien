import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState, memo, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./chart.module.scss";

const cx = classNames.bind(styles);
function PieChart({ chartData = [], onNavChange = () => {} }) {
  const [userData, setUserData] = useState({
    labels: "",
    datasets: [],
  });
  const [prevIndex, setPrevIndex] = useState(null);
  useEffect(() => {
    setUserData({
      labels: chartData.map((data) => data.month),
      datasets: [
        {
          backgroundColor: [ "rgba(75,192,192,1)","rgba(255, 225, 224, 0.2)"],
          borderWidth: 2,
          fill: true,
          pointBackgroundColor: "rgba(75,192,192,0.8)",
          borderColor: "rgba(75,192,192,1)",
          data: chartData.map((data) => data.tile),
        },
      ],
    });
  }, [chartData]);
  return (
    <div className={cx("container", "container-chartPia")}>
      <div className={cx("title")}>DUNG LƯỢNG HỆ THỐNG</div>
      <div className={cx("chartPia_content")}>
        <div className={cx("test")}>
          <Pie
            className={cx("charpia")}
            data={userData}
            options={{
              plugins: {
                legend: {
                  display: false,
                  position: "top", // Các vị trí có thể là 'top', 'bottom', 'left', 'right'
                },
                title: {
                  display: false,
                  text: "Chart Title",
                  font: {
                    size: 10,
                  },
                },
              },

              responsive: true,
            }}
          />
        </div>
        <div className={cx("food")}>
          <div className={cx("foodItem")}>
            <div>Còn trống</div>
            <div className={cx("txt_controng")}>
            {chartData.map((data) => {
              if(data.id===1){
                return data.userGain
              }
            })}
            </div>
          </div>
          <div className={cx("foodItem")}>
            <div>Đã dùng</div>
            <div className={cx("txt_dadung")}>   {chartData.map((data) => {
              if(data.id===2){
                return data.userGain
              }
            })}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieChart;
