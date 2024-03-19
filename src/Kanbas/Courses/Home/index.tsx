import ModuleList from "../Modules/List";
import "../../index.css";


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="float-start kanbas-edit-column me-4">
        <ModuleList />
      </div>
      <div className="float-start">
        Status
      </div>
    </div>
  );
}
export default Home;