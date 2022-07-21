import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
function Brand() {
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
        <div className="row  mt-3">
          <div className="col-lg-2 ei  ">
            <Link to="/" className="ali">
              <img src="./img/brr1.jpg" className="sl  " />
              <img src="./img/br1.png" className="loi1" />
              <p className="rp3"> Up To 33 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/brr2.jpg" className="sl " />
              <img src="./img/br2.png" className="loi2" />
              <p className="rp3"> 40 - 50% OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/brr3.jpg" className="sl " />
              <img src="./img/br3.png" className="loi2 mb-1" />
              <p className="rp3 mt-3"> Min. 25 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi ">
            <Link to="/" className="ali">
              <img src="./img/brr4.jpg" className="sl " />
              <img src="./img/br4.png" className="loi2 mt-4" />
              <p className="rp3 mt-2"> Upto 40 % OFF </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/brr5.jpg" className="sl" />
              <img src="./img/br5.png" className="loi3 " />
              <p className="rp3 mt-2"> Min. 20 % OFF </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
