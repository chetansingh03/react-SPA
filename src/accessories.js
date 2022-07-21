import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
function Access() {
  return (
    <>
      <div className="container-fluid p-3 bg3">
        <div className="row">
          <h3 className="he mt-4 acc fnf">Accesories</h3>
        </div>
        <div className="row  mt-3">
          <div className="col-lg-2 ei  ">
            <Link to="/" className="ali">
              <img src="./img/w1.webp" className="sl  " />

              <p className="rp3">Wallets</p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/w2.webp" className="sl " />

              <p className="rp3">Caps</p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/f3.jpg" className="sl " />

              <p className="rp3">Sunglasses</p>
            </Link>
          </div>
          <div className="col-lg-2 fi ">
            <Link to="/" className="ali">
              <img src="./img/w4.webp" className="sl " />

              <p className="rp3">Watches</p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/w5.webp" className="sl" />

              <p className="rp3">Bags</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-2 ei ">
            <Link to="/" className="ali">
              <img src="./img/w6.webp" className="sl" />

              <p className="rp3">Rings</p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/w7.webp" className="sl" />

              <p className="rp3">Jewelleries</p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/w8.webp" className="sl " />

              <p className="rp3 mt-1">Belts</p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/w9.webp" className="sl" />

              <p className="rp3 mt-1">Shawls </p>
            </Link>
          </div>
          <div className="col-lg-2 fi  ">
            <Link to="/" className="ali">
              <img src="./img/w10.webp" className="sl" />

              <p className="rp3 mt-1"> Muffelers </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Access;
