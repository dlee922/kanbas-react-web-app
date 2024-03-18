import { Link, useLocation } from "react-router-dom";
import "./index.css"
import { 
  FaTachometerAlt, 
  FaRegUserCircle, 
  FaBook, 
  FaRegCalendarAlt, 
  FaInbox, 
  FaClock, 
  FaNetworkWired,
  FaArrowRight,
  FaQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 red-icon" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2 red-icon" />  },
    { label: "Courses",   icon: <FaBook className="fs-2 red-icon" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2 red-icon" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2 red-icon" /> },
    { label: "History", icon: <FaClock className="fs-2 red-icon" /> },
    { label: "Studio", icon: <FaNetworkWired className="fs-2 red-icon" />},
    { label: "Commons", icon: <FaArrowRight className="fs-2 red-icon" />},
    { label: "Help", icon: <FaQuestionCircle className="fs-2 red-icon" size="30px"/> }
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li><a href="http://northeastern.edu"><img src="../../neu_logo.png" width="40px"/></a></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;