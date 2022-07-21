import React from "react";
import "./main.css";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

function Top() {
  return (
    <>
      <div className="container-fluid pt-3 ">
        <div className="row fnf hed mt-4">
          <p>Top Rated Products</p>
        </div>
        <section className="tp">
          <div className="row row1 ">
            <div className="col-md-2  mt-3 top1  ">
              <Link to="/bookorder">
                <img src="./img/h1.webp" className="top2 " />
              </Link>
              <p className="pr">Men's Slim-Fit Short-Sleeve Print Shirt </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^25636 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -20% </p>
                <BiRupee className="sgn" />
                <p className="prc"> 649 </p>
              </span>
              <p className="pl"> Ships to India</p>
            </div>
            <div className="col-md-2  mt-3  top1 ">
              <Link to="/bookorder">
                <img src="./img/h9.webp" className="top2 " />
              </Link>
              <p className="pr">
                Under Armour Men's Charged Assert 9 Marble Running Shoe
              </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^36636 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -30% </p>
                <BiRupee className="sgn" />
                <p className="prc">2499 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2  mt-3  top1 ">
              <Link to="/bookorder">
                <img src="./img/i4.jpg" className="top2 " />
              </Link>
              <p className="pr">
                The Drop Women's Marisol Long Sleeve Ruffle Smocked Cropped Top
              </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^25366 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -14% </p>
                <BiRupee className="sgn" />
                <p className="prc">649 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2  mt-3  top1 ">
              <Link to="/bookorder">
                <img src="./img/j1.webp" className="top2 " />
              </Link>
              <p className="pr"> Columbia Boys' Tamiami Long Sleeve Shirt </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^46352 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -32% </p>
                <BiRupee className="sgn" />
                <p className="prc">599 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2  mt-3  top1 ">
              <Link to="/bookorder">
                <img src="./img/ka3.webp" className="top2 " />
              </Link>
              <p className="pr">
                Gildan Fleece Crewneck Sweatshirt, Style G18000
              </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^23589</p>
              </span>
              <span className="dscc">
                <p className="dsc"> -19% </p>
                <BiRupee className="sgn" />
                <p className="prc"> 799 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2  mt-3  top1 ">
              <Link to="/bookorder">
                <img src="./img/kb2.webp" className="top2 " />
              </Link>
              <p className="pr">
                Haggar Men's ECLO Stria Expandable-Waist Plain-Front Dress Pant
              </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^30536 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -25% </p>
                <BiRupee className="sgn" />
                <p className="prc">799 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
          </div>
          <div className="row row1 ">
            <div className="col-md-2 top1 ">
              <Link to="/bookorder">
                <img src="./img/h5.webp" className="top2 " />
              </Link>
              <p className="pr"> Wrangler Riggs Workwear Men's Ranger Pant</p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^36436 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -20% </p>
                <BiRupee className="sgn" />
                <p className="prc"> 699 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2 top1 ">
              <Link to="/bookorder">
                <img src="./img/ka4.webp" className="top2 " />
              </Link>
              <p className="pr"> Columbia Men's Glennaker Lake™ Rain Jacket </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^15446 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -32% </p>
                <BiRupee className="sgn" />
                <p className="prc"> 1499 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2 top1 ">
              <Link to="/bookorder">
                <img src="./img/lb3.webp" className="top2 " />
              </Link>
              <p className="pr">
                Colosseum Active Women's Simone Cotton Blend Yoga and Running
                Shorts
              </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^18543 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -10% </p>
                <BiRupee className="sgn" />
                <p className="prc">499</p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2 top1 ">
              <Link to="/bookorder">
                <img src="./img/mb3.webp" className="top2 " />
              </Link>
              <p className="pr"> Lee Women's Regular Fit Straight Leg Jean</p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^21477 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -15% </p>
                <BiRupee className="sgn" />
                <p className="prc">899 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2 top1 ">
              <Link to="/bookorder">
                <img src="./img/j11.webp" className="top2 " />
              </Link>
              <p className="pr">
                Unisex Vintage Washed Distressed Baseball-Cap Twill Adjustable
                Dad-Hat…
              </p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^18553</p>
              </span>
              <span className="dscc">
                <p className="dsc"> -30% </p>
                <BiRupee className="sgn" />
                <p className="prc">399 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
            <div className="col-md-2 top1 ">
              <Link to="/bookorder">
                <img src="./img/j5.webp" className="top2 " />
              </Link>
              <p className="pr">Hanes Girls' Big EcoSmart Graphic Sweatshirt</p>
              <span className="istar">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <p className="nmm"> ^12544 </p>
              </span>
              <span className="dscc">
                <p className="dsc"> -8% </p>
                <BiRupee className="sgn" />
                <p className="prc">599 </p>
              </span>
              <p className="pl">Ships to India</p>
            </div>
          </div>
          <div className="row">
            <ul className="pli">
              <p className="pina">1</p>
              <p className="pin">2</p>
              <p className="pin">3</p>
              <p className="pin">4</p>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
export default Top;
