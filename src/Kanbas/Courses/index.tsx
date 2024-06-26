import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, Link, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { useState, useEffect } from "react";
import axios from "axios";
import Quizzes from "./Quizzes";


function Courses({ courses } : { courses: any[]; }) {
  const { courseId } = useParams();
  const location = useLocation();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const [currentSection, setCurrentSection] = useState("");
  
  // Extracting current section from the URL path
  const currentPath = location.pathname.split("/").pop() || "";

  const Breadcrumb = () => (
    <div>
      <HiMenu />
      <span>
        <Link to={`/${course?._id}`}>{course?._id}</Link> {course?.name}
      </span>
      <span>{' > '}</span>
      <span>{currentPath}</span>
    </div>
  )
  console.log(currentPath);
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
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;