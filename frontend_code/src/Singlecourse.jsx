import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import {data} from "./data";
import "./singlecourse.css";

function Singlecourse() {
  const pathname = useParams();
  const [coursedetails,setCoursedetails] = useState([])
  const [name,setName] = useState("");
  const [link,setLink] = useState("");
  const getdata =(idname)=>{
    const temp  = data.find((elem)=>{
      return elem.id == idname
    })
    setCoursedetails(Object.values(temp.content));
    setName(Object.values(Object.values(temp.content)[0].innercontents)[0].subheading)
    setLink(Object.values(Object.values(temp.content)[0].innercontents)[0].link)
  }
  useEffect(()=>{
    getdata(pathname.id);
  },[])
  return (
    <div className=" singlecourse-page">
      <div className="accordion" id="accordionExample">
        {coursedetails.length !== 0?coursedetails.map((elem)=>{
          return(
          <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseone${elem.id}`}
              aria-expanded="true"
              aria-controls={`collapseone${elem.id}`}
            >
              {elem.heading}
            </button>
          </h2>
          <div
            id={`collapseone${elem.id}`}
            className={`accordion-collapse collapse ${elem.id == 0?"show":""}`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {Object.values(elem.innercontents).map((ele)=>{
                return(<ul onClick={()=>{
                  setLink(ele.link)
                  setName(ele.subheading)
                }}>{ele.subheading}</ul>)})}
            </div>
          </div>
        </div>)}):null}
      </div>
      <div className="singlecourse-content">
        <div className="singlecourse-content-title">{name}</div>
        <div className="singlecourse-content-video-div">
          <ReactPlayer
            className="singlecourse-content-video"
            controls={true}
            width="100%"
            height="100%"
            url={link == ""?"https://www.youtube.com/watch?v=ysz5S6PUM-U":link}
          />
        </div>
      </div>
    </div>
  );
}

export default Singlecourse;
