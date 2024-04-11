import WorkingWithArrays from "./WorkingWithArrays";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";

const API_BASE = process.env.REACT_APP_API_BASE;

function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <a href={`${API_BASE}/a5/welcome`}>
        Welcome
      </a> <br/>
      <EncodingParametersInURLs/>
      <a href={`${API_BASE}/a5/assignment`} className="btn btn-primary me-2">
        Assignment 5
      </a> <br/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
    </div>
  );
}
export default Assignment5;