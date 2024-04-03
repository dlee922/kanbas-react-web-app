import WorkingWithArrays from "./WorkingWithArrays";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";


function Assignment5() {
  return (
    <div>
      <h1>Assignment 5</h1>
      <a href="http://localhost:4000/a5/welcome">
        Welcome
      </a> <br/>
      <EncodingParametersInURLs/>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-primary me-2">
        Assignment 5
      </a> <br/>
      <WorkingWithObjects/>
      <WorkingWithArrays/>
    </div>
  );
}
export default Assignment5;