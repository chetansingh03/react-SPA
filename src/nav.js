import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./main.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg  ">
        <div className="container-fluid">
          <FontAwesomeIcon icon={faEnvelope} class="ic"></FontAwesomeIcon>
          <span class="sm">shopeasy@gmail.com</span>

          <Link className="navbar-brand navicon" to="/">
            <span class="it fnf">
              <b>
                <i>Shopeasy</i>
              </b>
            </span>
            <img src="./img/a1.png" width="10%" />
          </Link>
          <FontAwesomeIcon icon={faPhone} class="ic"></FontAwesomeIcon>
          <span class="sm">+017248932893</span>
        </div>
      </nav>
    </>
  );
}

export default Nav;
