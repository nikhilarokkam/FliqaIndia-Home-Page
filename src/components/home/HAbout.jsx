import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  // Get the first six courses from the coursesCard array
  const coursesToDisplay = coursesCard.slice(0, 6);

  return (
    <section className="homeAbout">
      <div className="container">
        <Heading subtitle="What We Offer" title="We offer a wide range of services to your preferences..." />

        <div className="coursesCard">
          {/* Divide courses into rows */}
          <div className="grid2">
            {/* Iterate through coursesToDisplay array */}
            {coursesToDisplay.map((course) => (
              <div className="items" key={course.id} style={{ borderRadius: "15px" }}>
                <div className="content flex">
                  <div className="left" style={{ width: "40%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="img">
                      <img src={course.cover} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                  </div>
                  <div className="text" style={{ width: "60%", padding: "0 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h1>{course.coursesName}</h1>
                    <p style={{ textAlign: "justify", marginTop: "5px"}}>{course.description}</p>
                    <div style={{ marginTop: "15px" }}>
                      <button className="outline-btn">Know More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OnlineCourses />
    </section>
  );
};

export default HAbout;
