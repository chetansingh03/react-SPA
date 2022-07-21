import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faIndianRupee,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faMale } from "@fortawesome/free-solid-svg-icons";
import { faFemale } from "@fortawesome/free-solid-svg-icons";
import { faChild } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-bootstrap/Carousel";
import { FaSearch } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
function Nv() {
  const navigate = useNavigate();
  const handelsubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <Navbar className="bg4" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            classNameName="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="itemM active">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/new" className="item active">
              New
            </Nav.Link>

            <NavDropdown title="Category" className="item active ">
              <NavDropdown.Item as={Link} to="/men">
                Men <FontAwesomeIcon icon={faMale}></FontAwesomeIcon>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/women">
                Women <FontAwesomeIcon icon={faFemale}></FontAwesomeIcon>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/kids">
                Kids <FontAwesomeIcon icon={faChild}></FontAwesomeIcon>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/rated" className="item active">
              Top Rated
            </Nav.Link>
            <Nav.Link as={Link} to="/brands" className="item active">
              Brands
            </Nav.Link>

            <Nav.Link as={Link} to="/access" className="item active">
              Accessories
            </Nav.Link>
            <Nav.Link as={Link} to="/footwear" className="item disable">
              Footwear
            </Nav.Link>
          </Nav>
          <form onSubmit={handelsubmit}>
            <input type="search " placeholder="Search" className="frm" />
          </form>
          <FaSearch className="bts" />

          <Nav>
            <Nav.Link as={Link} to="/sale" className="itemA active">
              Sale
            </Nav.Link>
            <Nav.Link as={Link} to="" className="itemE active">
              <FaUser size={15} className="usr" />
            </Nav.Link>

            <NavDropdown title="" className=" navac  active ">
              <NavDropdown.Item as={Link} to="/login" className="it">
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/signup" className="it">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/login" className="it">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="" className="item active">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="sc"
              ></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link as={Link} to=" " className="item active">
              <BiHeart size={20} className="hert" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function Corousel() {
  return (
    <div className="bg2">
      <div className="container ">
        <Carousel fade class="mt-3">
          <Carousel.Item>
            <img
              className="d-block w-100 im"
              src=" ./img/c1.webp"
              alt="First slide"
            />
            <Carousel.Caption className="h-50">
              <h1 className="cr fnf">
                Welcome to <span class="sp">Shopeasy</span>
              </h1>
              <p className="p1 fnf">Trusted fashion website</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 im"
              src=" ./img/c2.webp"
              alt="Second slide"
            />
            <Carousel.Caption className="h-75">
              <h2 className="cr2 fnf">Find your best deals</h2>
              <p class="p fnf">and get extra discounts</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 im"
              src=" ./img/c4.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="h-75">
              <h2 className="cr1 fnf">Choose your favourite Brand</h2>
              <p className="p1 fnf">Fashion in your own way</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 im"
              src=" ./img/c5.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className="h-75">
              <h2 className="cr2 fnf">
                Get additionals discounts on offers and sales
              </h2>
              <p className="p fnf">
                Additional discounts and offers in summer sale
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

function Off() {
  return (
    <>
      <div className="nbg">
        <div className="container">
          <div className="row ">
            <h2 class="he mt-5 fnf">
              <b>Best Offers and deals</b>
            </h2>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <figure className="cap1">
                <img src="./img/d1.webp" className="im1" />
                <figcaption className="capp">
                  <h4 class="h4 fnf">Summer festival offers</h4>

                  <h6 class="h6 fnf">
                    Discount upto <b>40%</b>
                  </h6>
                  <Link to="/ ">
                    <button class="but fnf">
                      <b>Check Now</b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="cap1">
                <img src="./img/d2.png" className="im2" />
                <figcaption className="capp fnf">
                  <h4 class="h4">Traditional Wears</h4>

                  <h6 class="h6">
                    Upto <b>50%</b> OFF
                  </h6>
                  <Link to="/ ">
                    <button class="but1">
                      <b>Check Now</b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="cap1">
                <img src="./img/d3.jpg" className="im3" />
                <figcaption className="capp fnf">
                  <h4 class="h4">Sports wear</h4>

                  <h6 class="h6">
                    Upto <b>30%</b> OFF
                  </h6>
                  <Link to="/ ">
                    <button className="but2">
                      <b>Check Now</b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <figure className="cap2">
                <img src="./img/d4.webp" className="im4" />
                <figcaption className="capp fnf">
                  <img src="./img/z.png" width="30%" className="zr" />

                  <h6 className="h6">
                    Upto <b>55%</b> OFF
                  </h6>
                  <Link to="/ ">
                    <button className="but1">
                      <b>Check Now</b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="cap2">
                <img src="./img/d5.webp" className="im5" />
                <figcaption className="capp fnf">
                  <h4 className="h4">Casuals wear</h4>

                  <h6 className="h6">
                    Upto <b>60%</b> OFF
                  </h6>
                  <Link to="/ ">
                    <button className="but1">
                      <b>Check Now</b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>

            <div className="col-md-4">
              <figure className="cap2">
                <img src="./img/d6.jpg" className="im6" />
                <figcaption className="capp fnf">
                  <h4 class="h44">Bags and Sunglasses</h4>

                  <h6 class="h6">
                    Min <b>25%</b> OFF
                  </h6>
                  <Link to="/ ">
                    <button class="but2">
                      <b>Check Now</b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Sale() {
  return (
    <>
      <div className="container-fluid p-3 bg3">
        <div className="row">
          <h3 className="he mt-4 fnf">
            <b>Sale and Budget Buyes</b>
          </h3>
        </div>
        <div className="row  mt-3">
          <div className="col-md-2   di2 ">
            <Link to="/" className="ali">
              <img src="./img/e1.webp" className="sl" />
              <h5 className="rp1">T-shirts</h5>
              <p className="rp2">
                Under
                <FontAwesomeIcon
                  icon={faIndianRupee}
                  className="ico"
                ></FontAwesomeIcon>
                499
              </p>
            </Link>
          </div>
          <div className="col-md-2  di">
            <Link to="/" className="ali">
              <img src="./img/e2.jpg" className="sl" />
              <h5 className="rp1">Sarees</h5>
              <p className="rp2">
                Starts from
                <FontAwesomeIcon
                  icon={faIndianRupee}
                  className="ico"
                ></FontAwesomeIcon>
                800
              </p>
            </Link>
          </div>
          <div className="col-md-2  di">
            <Link to="/" className="ali">
              <img src="./img/e3.jpg" className="sl" />
              <h5 className="rp1">Sneakers</h5>
              <p className="rp2">
                Under
                <FontAwesomeIcon
                  icon={faIndianRupee}
                  className="ico"
                ></FontAwesomeIcon>
                1000
              </p>
            </Link>
          </div>
          <div className="col-md-2  di">
            <Link to="/" className="ali">
              <img src="./img/e4.jpg" className="sl" />
              <h5 className="rp1"> Sunglasses </h5>
              <p className="rp2">
                Upto
                <FontAwesomeIcon
                  icon={faIndianRupee}
                  className="ico"
                ></FontAwesomeIcon>
                10000
              </p>
            </Link>
          </div>

          <div className="col-md-2  di1">
            <Link to="/" className="ali">
              <img src="./img/e5.jpg" className="sl" />
              <h5 className="rp1">Tops </h5>
              <p className="rp2">
                Under
                <FontAwesomeIcon
                  icon={faIndianRupee}
                  className="ico"
                ></FontAwesomeIcon>
                399
              </p>
            </Link>
          </div>
          <div className="col-md-2  di1">
            <Link to="/" className="ali">
              <img src="./img/e6.jpg" className="sl" />
              <h5 className="rp1">Long-wear</h5>
              <p className="rp2">
                From
                <FontAwesomeIcon
                  icon={faIndianRupee}
                  className="ico"
                ></FontAwesomeIcon>
                999
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nv;
export { Corousel, Off, Sale };
