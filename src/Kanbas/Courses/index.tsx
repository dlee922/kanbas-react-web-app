import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState } from "react";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const [currentSection, setCurrentSection] = useState("");

  const Breadcrumb = () => (
    <div>
      <HiMenu />
      <span>
        <Link to={`/${course?._id}`}>{course?._id}</Link> {course?.name}
      </span>
      {currentSection && (
        <>
          <span>{currentSection}</span>
          {/* Additional sections if needed */}
        </>
      )}
    </div>
  )
  return (
    <div>
      <Breadcrumb /><hr />
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;