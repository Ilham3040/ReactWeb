import React from "react";
import "./Page.scss";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Legend } from "chart.js";

function Page() {
  const data = {
    labels: [" ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        data: [6, 7, 5, 7, 5, 7, 8],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };
  const data2 = {
    labels: [" ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        data: [9, 7, 5, 7, 5, 7, 8],
        borderColor: "rgb(0, 255, 128)",
        backgroundColor: "rgba(0, 255, 128, 0.2)",
        fill: true,
        borderWidth: 1,
        pointRadius: 0,
      },
    ],
  };
  const data3 = {
    labels: [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    datasets: [
      {
        data: [9, 7, 5, 7, 5, 7, 8, 9, 7, 5, 7, 5, 7, 8],
        borderColor: "rgba(255, 99, 132,0.4)",
        backgroundColor: "rgba(255, 99, 132,0.4)",
        fill: true,
        borderWidth: 1,
        pointRadius: 0,
        order: 3,
      },
      {
        data: [4, 5, 3, 4, 6, 4, 3, 5, 4, 3, 5, 6, 4, 5],
        borderColor: "rgba(102, 0, 204,0.3)",
        backgroundColor: "rgba(102, 0, 204,0.3)",
        fill: true,
        borderWidth: 1,
        pointRadius: 0,
        order: 2,
      },
    ],
  };

  return (
    <div className='page'>
      <div className='navigation'>
        <div className='profile'>
          <img src='./logo192.png' alt='' srcset='' />
        </div>
        <div className='navlist'>
          <img src='./svg/bxs-dashboard.svg' alt='' srcset='' />
          <img src='./svg/bxs-detail.svg' alt='' srcset='' />
          <img src='./svg/bxs-grid.svg' alt='' srcset='' />
          <img src='./svg/bxs-shopping-bag.svg' alt='' srcset='' />
          <img src='./svg/bxs-objects-vertical-bottom.svg' alt='' srcset='' />
          <img src='./svg/bxs-user.svg' alt='' srcset='' />
          <img src='./svg/bx-list-ul.svg' alt='' srcset='' />
          <img src='./svg/bxs-cog.svg' alt='' srcset='' />
          <img src='./svg/bxs-right-arrow-alt.svg' alt='' srcset='' className='mt-1' />
        </div>
      </div>
      <div className='main'>
        <div className='title'>
          <h2>Constructor</h2>
          <form action='' id='search'>
            <img src='./svg/bx-search.svg' alt='' srcset='' />
            <input type='text' placeholder='Search' name='searchbar' />
            <button type='submit'>
              <img src='./svg/bxs-right-arrow-alt.svg' alt='' srcset='' />
            </button>
          </form>
          <div className='uppermenu'>
            <div className='nav'>
              <ul>
                <li>
                  <a href=''>Dashboard</a>
                </li>
                <li>
                  <a href=''>Orders</a>
                </li>
                <li>
                  <a href=''>Sections</a>
                </li>
                <li>
                  <a href=''>Products</a>
                </li>
                <li>
                  <a href=''>Clients</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='recent'>
            <a href=''>
              <img src='./svg/bxs-grid.svg' alt='' srcset='' />
              Recent
            </a>
          </div>
        </div>
        <div className='content'>
          <div className='top'>
            <div className='icon'>
              <img src='./svg/bxs-dashboard.svg' alt='' srcset='' />
              <h3>Dashboard</h3>
            </div>

            <div className='select'>
              <div className='overview'>
                <h3>Overview</h3>
              </div>
              <div className='product'>
                <h3>Products</h3>
              </div>
            </div>

            <button style={{height : "42px",width: "130px"}} className='button'>
              <img src='./svg/bxs-plus-circle.svg' alt='' />
              <h3 style={{fontSize : "12px"}}>Add Widget</h3>
            </button>
          </div>

          <div className='maincontent'>
            <div className='row1'>
              <div className='mostselling'>
                <div className='topbox'>
                  <h3>Most Selling Product</h3>
                  <img src='./svg/bx-dots-vertical-rounded.svg' alt='' srcset='' />
                </div>
                <div className='detailproduct'>
                  <img src='./png/airpod.png' alt='' srcset='' />
                  <div className='gains'>
                    <h3 style={{ display: "flex" }}>
                      <img style={{ width: "20px" }} src='./svg/bx-dollar.svg' alt='' />
                      12.545
                    </h3>
                    <h4 style={{ color: "green" }}>
                      <img src='./png/profit.png' alt='' srcset='' />
                      3.54%
                    </h4>
                  </div>
                </div>
              </div>
              <div className='mostviewed'>
                <div className='topbox'>
                  <h3>Most Selling Product</h3>
                  <img src='./svg/bx-dots-vertical-rounded.svg' alt='' srcset='' />
                </div>
                <div className='detailproduct'>
                  <img src='./png/monitor.png' alt='' srcset='' />
                  <div className='gains'>
                    <h3 style={{ display: "flex" }}>
                      <img style={{ width: "20px", paddingRight: "5px" }} src='./svg/bxs-show.svg'></img>8.357
                    </h3>
                    <h4 style={{ color: "red" }}>
                      <img src='./png/loss.png' alt='' srcset='' />
                      1.23%
                    </h4>
                  </div>
                </div>
              </div>
              <div className='mostprofitable'>
                <h3>Most Profitable Sections</h3>
                <div className='listsection'>
                  <div className='list'>
                    <tr>
                      <td>
                        <h3 style={{ backgroundColor: "rgba(224, 254, 52, 0.532)", color: "orangered" }}>1</h3>
                      </td>
                      <td>Electronics</td>
                      <td>
                        <img src='./svg/bxs-up-arrow-alt.svg' alt='' srcset='' />
                      </td>
                      <td>$56.23K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 style={{ backgroundColor: "lightgray" }}>2</h3>
                      </td>
                      <td>Computer</td>
                      <td>
                        <img src='./svg/bxs-down-arrow-alt.svg' alt='' srcset='' />
                      </td>
                      <td>$46.43K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 style={{ backgroundColor: "rgba(255, 55, 0, 0.537)", color: "orangered" }}>3</h3>
                      </td>
                      <td>Construction</td>
                      <td>
                        <img src='./svg/bxs-up-arrow-alt.svg' alt='' srcset='' />
                      </td>
                      <td>$38.22K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3>4</h3>
                      </td>
                      <td>Auto Goods</td>
                      <td>
                        <img src='' alt='' srcset='' />
                      </td>
                      <td>$33.21K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3>5</h3>
                      </td>
                      <td>Camcoders</td>
                      <td>
                        <img src='' alt='' srcset='' />
                      </td>
                      <td>$21.99K</td>
                    </tr>
                  </div>
                </div>
              </div>
            </div>
            <div className='row2'>
              <div className='mostcategories'>
                <h3>Most Profitable Categories</h3>
                <div className='listsection'>
                  <div className='list'>
                    <tr>
                      <td>
                        <h3 style={{ backgroundColor: "rgba(224, 254, 52, 0.532)", color: "orangered" }}>1</h3>
                      </td>
                      <td>Mobile Phones</td>
                      <td>
                        <img src='./svg/bxs-up-arrow-alt.svg' alt='' srcset='' />
                      </td>
                      <td>$12.5K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 style={{ backgroundColor: "lightgray" }}>2</h3>
                      </td>
                      <td>Smart Watch</td>
                      <td>
                        <img src='' alt='' srcset='' />
                      </td>
                      <td>$11.3K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 style={{ backgroundColor: "rgba(255, 55, 0, 0.537)", color: "orangered" }}>3</h3>
                      </td>
                      <td>Protable Accoustic</td>
                      <td>
                        <img src='' alt='' srcset='' />
                      </td>
                      <td>$9.9K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3>4</h3>
                      </td>
                      <td>Smart Speaker</td>
                      <td>
                        <img src='./svg/bxs-down-arrow-alt.svg' alt='' srcset='' />
                      </td>
                      <td>$9.9K</td>
                    </tr>
                    <tr>
                      <td>
                        <h3>5</h3>
                      </td>
                      <td>Camcoders</td>
                      <td>
                        <img src='' alt='' srcset='' />
                      </td>
                      <td>$9.9K</td>
                    </tr>
                  </div>
                </div>
              </div>
              <div className='topselling'>
                <h3>Top Selling Products</h3>
                <div className='listsection'>
                  <div className='list'>
                    <tr>
                      <td>
                        <img src='./png/airpod.png' alt='' />
                      </td>
                      <td>
                        <h3>Apple Airpods 2 </h3>
                      </td>
                      <td>
                        <h4>$12.8K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/th.png' alt='' style={{ width: "40px", padding: "0px 5px" }} />
                      </td>
                      <td>
                        <h3>Samsung Smart Watch</h3>
                      </td>
                      <td>
                        <h4>$11.3K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/monitor.png' alt='' />
                      </td>
                      <td>
                        <h3>Apple Monitor Pro</h3>
                      </td>
                      <td>
                        <h4>$9.9K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/applewatch.png' alt='' style={{ width: "40px", padding: "0px 5px" }} />
                      </td>
                      <td>
                        <h3>Apple Watch Series 4</h3>
                      </td>
                      <td>
                        <h4>$7.8K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/gpixel.png' alt='' style={{ width: "40px", padding: "0px 5px" }} />
                      </td>
                      <td>
                        <h3>Google Pixel 4 XL</h3>
                      </td>
                      <td>
                        <h4>$6.2K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/speaker.png' alt='' />
                      </td>
                      <td>
                        <h3>Amazon Smart Speaker</h3>
                      </td>
                      <td>
                        <h4>$4.8K</h4>
                      </td>
                    </tr>
                  </div>
                </div>
              </div>
            </div>
            <div className='row3'>
              <div className='mostproducts'>
                <h3>Top Selling Products</h3>
                <div className='listsection'>
                  <div className='list'>
                    <tr>
                      <td>
                        <img src='./png/macpro.png' alt='' />
                      </td>
                      <td>
                        <h3>Macbook Pro 16</h3>
                      </td>
                      <td>
                        <h4>$10K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/ipad.png' alt='' />
                      </td>
                      <td>
                        <h3>Apple iPad 10.2</h3>
                      </td>
                      <td>
                        <h4>$9.2K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/mssurface.png' alt='' style={{ width: "40px", padding: "0px 5px" }} />
                      </td>
                      <td>
                        <h3>Microsoft Surface Book</h3>
                      </td>
                      <td>
                        <h4>$8.4K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/googlenest.png' alt='' style={{ width: "40px", padding: "0px 5px" }} />
                      </td>
                      <td>
                        <h3>Google Nest</h3>
                      </td>
                      <td>
                        <h4>$7.4K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/imacpro.png' alt='' style={{ width: "40px", padding: "0px 5px" }} />
                      </td>
                      <td>
                        <h3>Apple iMac Pro</h3>
                      </td>
                      <td>
                        <h4>$6.3K</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src='./png/samsungwatch2.png' alt='' style={{ width: "40px", padding: "0px 5px" }} />
                      </td>
                      <td>
                        <h3>Samsung Smart Watch</h3>
                      </td>
                      <td>
                        <h4>$5.4K</h4>
                      </td>
                    </tr>
                  </div>
                </div>
              </div>
              <div className='overstats'>
                <h3>General Statistics</h3>
                <div className='detailitem'>
                  <div className='item'>
                    <h1>3 456</h1>
                    <h3>Items On Sale</h3>
                  </div>
                  <div className='monthsale'>
                    <h1>432</h1>
                    <h3>Sales This Month</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='statistic'>
        <div className='chartbox'>
          <div className='detail'>
            <div className='indetail'>
              <p>Total Sales</p>
              <h3>$281.90</h3>
            </div>
            <div className='mt3'>
              <Line
                data={data2}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  layout: {
                    padding: {
                      bottom: -30,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      beginAtZero: true,
                      grid: {
                        drawOnChartArea: false,
                      },
                      ticks: {
                        display: false,
                        maxTicksLimit: 20,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}></Line>
            </div>
          </div>
          <div className='order'>
            <p> 6 total orders</p>
            <p> view report</p>
          </div>
        </div>
        <div className='chartbox'>
          <div className='detail'>
            <div className='indetail'>
              <p>Total Sessions</p>
              <h3>456</h3>
            </div>
            <div className='mt3'>
              <Line
                data={data}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  layout: {
                    padding: {
                      bottom: -30,
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      beginAtZero: true,
                      grid: {
                        drawOnChartArea: false,
                      },
                      ticks: {
                        display: false,
                        maxTicksLimit: 20,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}></Line>
            </div>
          </div>
          <div className='order'>
            <div style={{display : "flex",gap : "10px"}}>
              <p style={{backgroundColor: "rgba(102, 0, 204,0.3)", color: "rgba(102, 0, 204,1)",padding:"5px 10px",borderRadius : "0.4rem"}}> Live</p>
              <p style={{padding:"5px 10px"}}> 4 visitors</p>
            </div>
            <p>See Live View</p>
          </div>
        </div>
        <div className='chartbox'>
          <div className='detail'>
            <div className='indetail'>
              <p>Customer Rate</p>
              <h3>5.43%</h3>
            </div>
            <div className='mt3'>
              <Line
                data={data3}
                options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  layout: {
                    padding: {
                      bottom: -30,
                    },
                  },
                  tension: 0.2,
                  scales: {
                    x: {
                      grid: {
                        drawOnChartArea: false,
                      },
                    },
                    y: {
                      beginAtZero: true,
                      grid: {
                        drawOnChartArea: false,
                      },
                      ticks: {
                        display: false,
                        maxTicksLimit: 20,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}></Line>
            </div>
          </div>
          <div className='order' style={{ height : "32px"}}>
            <div className="dot">
              <img src='./svg/pink-dot.svg' style={{ margin: "0 5px", width: "15px"  }}></img>
              <p>First Time</p>
            </div>
            <div style={{ display: "flex", alignItems: "center",margin: "0" }}>
              <img src='./svg/purple-dot.svg' style={{ marginRight: "5px", width: "15px" }}></img>
              <p> Returning</p>
            </div>
          </div>
        </div>

        <div className='activities'>
          <div className='actselect'>
            <h3>Action</h3>
            <h3 className='active'>Orders</h3>
          </div>
          <div className='operation'>
            <div className='opdetail'>
              <h4 className='time'>11:32</h4>
              <h4 className='op'>
                New Category added <br></br>
                {"<<Mobile Phones>>"}
              </h4>
            </div>
            <div className='opdetail'>
              <h4 className='time'>11:32</h4>
              <h4 className='op'>
                New Category added <br></br>
                {"<<Apple iPhone 9>>"}
              </h4>
            </div>
            <div className='opdetail'>
              <h4 className='time'>11:32</h4>
              <h4 className='op'>
                New Category added <br></br>
                {"<<Apple iPad Pro 12.9>>"}
              </h4>
            </div>
            <div className='opdetail'>
              <h4 className='time'>11:32</h4>
              <h4 className='op'>
                New Category added <br></br>
                {"<<Apple iPad Pro 12.9>>"}
              </h4>
            </div>
            <div className='opdetail'>
              <h4 className='time'>11:32</h4>
              <h4 className='op'>
                New Category added <br></br>
                {"<<Smart Watches>>"}
              </h4>
            </div>
            <div className='opdetail'>
              <h4 className='time'>11:32</h4>
              <h4 className='op'>
                New Category added <br></br>
                {"<<Smart Watches>>"}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
