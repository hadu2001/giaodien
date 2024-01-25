import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState,memo ,useEffect} from "react";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./chart.module.scss";


const cx = classNames.bind(styles);

function BarChart({ chartData = [],onNavChange=()=>{} }) {
  
  const [userData, setUserData] = useState({
    labels:'',
    datasets: [
    ],
  });
  const [prevIndex, setPrevIndex] = useState(null);
  useEffect(()=>{
    setUserData({
      labels: chartData.map((data) => data.month),
      datasets: [
        {
          borderWidth: 0,
          borderRadius: 5,
          maxBarThickness: 6,
          minBarThickness: 4,
          label: "Users",
          data: chartData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
        },
      ],
    });
  },[chartData])
  const [activeNav, setActiveNav] = useState(1);
  
  const toggleNavs = (e, index) => {
    e.preventDefault();
  
    if (index === prevIndex) {
      // Nếu giống nhau, thì return ngay lập tức hoặc thực hiện các hành động khác
      return;
    }
    console.log(index)
    setActiveNav(index);
    onNavChange(index)
    setPrevIndex(index);
  };

  return (
    <>
     <div className= {cx("container","container-bar")}>
          <div className="row">
            <div className="col">
              <h6 className={cx("luongtruycap","text-uppercase  ls-1 mb-1")}>Lượng truy cập</h6>
              <h2 className={cx("title"," mb-0")}>89890</h2>
            </div>
            <div className="col-5">
              <Nav className={cx("contain_button","")} pills>
                <NavItem className={cx("nav-item-1",{
                            active_sau: activeNav === 2,
                          })}>
                <NavLink
                          className={cx("", )}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                    <span className="d-none d-md-block">Month</span>
                    <span className="d-md-none">M</span>
                  </NavLink>
                </NavItem>
                <NavItem className={cx("nav-item-2", {
                            active_sau: activeNav === 1,
                          })}>
                <NavLink 
                          className={cx(" ")}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                    <span className="d-none d-md-block">Week</span>
                    <span className="d-md-none">W</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <Bar
          className={cx("charbar")}
            data={userData}
            options={{
              responsive: true,
              maintainAspectRatio: true,
              interaction: {
                intersect: false,
                mode: "index",
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  grid: {
                    padding: 10,
                    drawBorder: false,
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: false,
                    borderDash: [10, 10],

                color: "#ccc",
                  },
                  ticks: {
                   
                    display: false,
                    color: "#fff",
                  },
                },
                x: {
                  grid: {
                    display: false,
                    color: "rgba(255, 255, 255, .2)",
                  },
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
                    // autoSkip: false, // Tắt chế độ tự động bỏ qua các chữ
                    maxRotation: 0, // Đặt góc xoay tối đa là 0 độ
                  },
                },
              },
            }}
          />
     </div>

    </>
  );
}

export default memo(BarChart);

// <Bar
//   data={{
//     labels: [
//       "Africa",
//       "Asia",
//       "Europe",
//       "Europe",
//       "Europe",
//       "Latin America",
//       "North America",
//     ],

//     datasets: [
//       {
//         tension: 0.4,
//         borderWidth: 0,
//         borderRadius: 5,
//         maxBarThickness: 10,
//         label: "Bảng",
//         backgroundColor: ["#fff", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
//         data: [2478, 5267, 734, 784, 433, 434, 232, 323],
//       },
//     ],
//   }}
//   options={{
//     responsive: true,

//     interaction: {
//       intersect: false,
//       mode: "index",
//     },
//     legend: { display: false },
//     title: {
//       display: true,
//       text: "Predicted world population (millions) in 2050",
//     },
//     scales: {
//       y: {
//         grid: {
//           color: "rgba(255, 255, 255, .2)",
//         },
//         ticks: {
//           color: "#fff",
//         },
//       },
//       x: {
//         grid: {
//           color: "rgba(255, 255, 255, .2)",
//         },
//         ticks: {
//           color: "red",
//         },
//       },
//     },
//   }}
// />;
