import {Spinner as BootstrapSpinner} from "react-bootstrap";
import "./Spinner.css";

function Spinner() {
  return (
    <BootstrapSpinner animation="border" role="status" className="spinner">
      <span className="visually-hidden">Loading...</span>
    </BootstrapSpinner>
  );
}

export default Spinner;
