import React, { useEffect, useState } from "react";
import webdev from "./assets/webdev.svg";
import data from "./assets/data.svg";
import growth from "./assets/growth.svg";
import { useNavigate } from "react-router-dom";
function Courses() {
  const navigate = useNavigate();
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show1, setShow1] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow1(false);
    }, 10);
    let oldValue1 = 0;
    let newValue1 = 0;
    window.addEventListener("scroll", function (e) {
      newValue1 = window.pageYOffset;
      console.log(oldValue1, "old", newValue1, "new");
      if (oldValue1 > 300) {
        setShow2(false);
      }
      if (oldValue1 > 830) {
        setShow3(false);
      }
      oldValue1 = newValue1;
    });
  }, []);
  return (
    <div>
      <div
        className="d-flex w-100 justify-content-around "
        style={{ marginTop: "10rem" }}
      >
        <div className={`headtext-animate  ${show1 ? "" : "is-visible"} `}>
          <h1
            style={{ marginTop: "5rem" }}
            className="is-size-2 is-clickable"
            onClick={() => navigate("/course/webdevelopment")}
          >
            Web development
          </h1>
        </div>
        <div>
          <img src={webdev} alt="webdeve" style={{ width: "400px" }} />
        </div>
      </div>
      <div
        className="d-flex w-100 justify-content-around "
        style={{ marginTop: "10rem" }}
      >
        <div>
          <img src={data} alt="webdeve" style={{ width: "400px" }} />
        </div>
        <div className={`headtext-animate  ${show2 ? "" : "is-visible"} `}>
          <h1
            style={{ marginTop: "11rem" }}
            className="is-size-2 is-clickable"
            onClick={() => navigate("/course/digitalmarketing")}
          >
            Digital marketing
          </h1>
        </div>
      </div>
      <div
        className="d-flex w-100 justify-content-around "
        style={{ marginTop: "9rem", marginBottom: "10rem" }}
      >
        <div className={`headtext-animate  ${show3 ? "" : "is-visible"} `}>
          <h1
            style={{ marginTop: "10rem" }}
            className="is-size-2 is-clickable"
            onClick={() => navigate("/course/finance")}
          >
            Finance
          </h1>
        </div>
        <div>
          <img src={growth} alt="webdeve" style={{ width: "400px" }} />
        </div>
      </div>
    </div>
  );
}
export default Courses;
