import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState, memo, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./chart.module.scss";

const cx = classNames.bind(styles);

function LineChart({ chartData = [], onNavChange = () => {} }) {
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
          barPercentage: 0.2,
          tension: 0.2,
          showLine: true,
          borderWidth: 1,
          fill: true,
          label: "Users",
          pointBackgroundColor: "rgba(75,192,192,0.8)",
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          data: chartData.map((data) => data.userGain),
        },
      ],
    });
  }, [chartData]);
  console.log(userData);
  return (
    <div className={cx("container", "container-bar")}>
      <div className="row">
        <div className="col">
          <h6
            className={cx(
              "luongtruycap",
              "text-uppercase  ls-1 mb-1"
            )}
          >
            Lượng truy cập
          </h6>
          <h2 className={cx("title", " mb-0")}>89890</h2>
        </div>
      </div>
      <Line
        className={cx("charline")}
        data={userData}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
              type: "linear",
              position: "bottom",
              ticks: {
                padding: -2,
                font: {
                  size: 10,
                  weight: 200,
                  family: "Roboto",
                  style: "normal",
                  lineHeight: 1,
                },
                color: "#ADB9D8",
              },
              title: {
                display: false,
                text: "X-axis Label",
                font: {
                  size: 14,
                },
              },
            },
            y: {
              grid: {
                padding: 1,
                drawOnChartArea: true,
                drawTicks: false,

                color: "#ccc",
              },
              ticks: {
                padding: 8,
                font: {
                  size: 10,
                  weight: 200,
                  family: "Roboto",
                  style: "normal",
                  lineHeight: 1,
                },
                color: "#ADB9D8",
              },
              title: {
                display: false,
                text: "Y-axis Label",
                font: {
                  size: 10,
                },
              },
            },
          },
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
          elements: {
            point: {
              radius: 5,
              pointStyle: "circle", // 'circle', 'cross', 'crossRot', 'dash', 'line', 'rect', 'rectRounded', 'rectRot', 'star', 'triangle'

              borderWidth: 3,
            },
            line: {
              tension: 0.2, // Điều chỉnh độ nảy của đường thẳng
            },
          },
          responsive: true,
        }}
      ></Line>
    </div>
  );
}

export default LineChart;
