import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes"];
  const { pathname } = useLocation();
  const { courseId } = useParams();
  return (
    // <ul className="wd-navigation list-group" style={{ width: 150}}>
    //   {links.map((link, index) => (
    //     <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
    //       <Link to={link}>{link}</Link>
    //     </li>
    //   ))}
    // </ul>
    <div className="wd-course-navigation list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item acc-nav-item ${pathname.includes(link) && "active"}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
export default CourseNavigation;