import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaRecycle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./main.css";

function Brands() {
  return (
    <>
      <div className="container-fluid p-3 bg3">
        <div className="row">
          <h3 className="he mt-4 fnf">
            <b> Major Brands </b>
          </h3>
        </div>
        <div className="row  mt-3">
          <div className="col-lg-2 ei  ">
            <Link to="/" className="ali">
              <img src="./img/f1.webp" className="sl  " />
              <img src="./img/g1.png" className="loi1" />
              <p className="rp3"> Up To 50 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f2.jpg" className="sl " />
              <img src="./img/g2.webp" className="loi2" />
              <p className="rp3"> 50 - 70 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f3.jpg" className="sl " />
              <img src="./img/g3.webp" className="loi2 mb-1" />
              <p className="rp3"> Min .35 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi ">
            <Link to="/" className="ali">
              <img src="./img/f4.webp" className="sl " />
              <img src="./img/g4.png" className="loi2" />
              <p className="rp3"> 40 - 50 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f5.webp" className="sl" />
              <img src="./img/g5.png" className="loi3" />
              <p className="rp3"> Up To 40 % OFF </p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 ei ">
            <Link to="/" className="ali">
              <img src="./img/f6.webp" className="sl" />
              <img src="./img/g6.jpg" className="loi2" />
              <p className="rp3"> Min .35 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f7.webp" className="sl" />
              <img src="./img/g7.png" className="loi2" />
              <p className="rp3"> Up To 60 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f8.jpg" className="sl " />
              <img src="./img/g8.png" className="loi1 mt-2" />
              <p className="rp3 mt-4"> 40 - 60 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f11.webp" className="sl" />
              <img src="./img/g11.jpg" className="loi1 mt-2" />
              <p className="rp3 mt-3"> Min .50 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f12.webp" className="sl" />
              <img src="./img/g12.png" className="loi1 mt-1" />
              <p className="rp3 mt-2"> Up To 40 % OFF </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <div className=" container mt-4 ">
        <div className="row">
          <div className="col-lg-2">
            <h6 className="hh mb-4"> CATEGORIES </h6>
            <Link to="/" className="pp">
              Men
            </Link>
            <br />
            <Link to="/" className="pp">
              Women
            </Link>
            <br />
            <Link to="/" className="pp">
              Kids
            </Link>
            <br />
            <Link to="/" className="pp">
              Home & Living
            </Link>
            <br />
            <Link to="/" className="pp">
              Gift Cards
            </Link>
            <br />
            <Link to="/" className="pp">
              Accessories
            </Link>
            <br />
          </div>
          <div className="col-lg-2">
            <h6 className="hh mb-4"> USEFUL LINKS </h6>
            <Link to="/" className="pp">
              Blog
            </Link>
            <br />
            <Link to="/" className="pp">
              Careers
            </Link>
            <br />
            <Link to="/" className="pp">
              Site Map
            </Link>
            <br />
            <Link to="/" className="pp">
              Corporate Information
            </Link>
            <br />
          </div>
          <div className="col-md-3">
            <h6 className="he mb-4 "> CONTACT US </h6>
            <p className="pn">
              <Link to=""> www.shopeasy.com </Link>
            </p>
            <p className="pn"> +01728525995 </p>
            <p className="pn"> shopeasy @gmail.com </p>
            <p className="pn"> Join us on </p>
            <p className="pn">
              <Link to="https://www.facebook.com/" className="ico">
                <FaFacebook size="10%" />
              </Link>
              <Link
                to="https://www.instagram.com/accounts/login/"
                className="ico"
              >
                <FaInstagram size="10%" />
              </Link>
              <Link to="https://www.twitter.com/" className="ico">
                <FaTwitter size="10%" />
              </Link>
              <Link to="https://www.youtube.com/" className="ico">
                <FaYoutube size="10%" />
              </Link>
            </p>
          </div>
          <div className="col-md-1"> </div>
          <div className="col-lg-2">
            <h6 className="hh mb-4"> Customer Policies </h6>
            <Link to="/" className="pp">
              Contact Us
            </Link>
            <br />
            <Link to="/" className="pp">
              FAQ 's
            </Link>
            <br />
            <Link to="/" className="pp">
              T & C
            </Link>
            <br />
            <Link to="/" className="pp">
              Terms of Use
            </Link>
            <br />
            <Link to="/" className="pp">
              Shipping
            </Link>
            <br />
            <Link to="/" className="pp">
              Cancellation
            </Link>
            <br />
            <Link to="/" className="pp">
              Returns
            </Link>
            <br />
            <Link to="/" className="pp">
              Privancy Policies
            </Link>
            <br />
          </div>
          <div className="col-lg-2">
            <h5> 100 % Originals </h5>
            <p className="pp2"> guarantee for all products at shopeasy.com </p>
            <h5>
              <FaRecycle className="rc" />
              Return within 15 Days
            </h5>
          </div>
        </div>
      </div>
      <div className="container-fluid p-2 pnew">
        <p>
          & copy; Copyright | Shopeasy.All Right Reserved.Website designed by
          <Link target="_blank" to="/">
            Chetan Singh
          </Link>
        </p>
      </div>
    </>
  );
}
export default Brands;
export { Footer };
