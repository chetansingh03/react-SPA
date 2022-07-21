import { useState } from "react";

import "./main.css";

import Menu from "./menu";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

function Tabs() {
  const [items, setItems] = useState(Menu);

  const filterItem = (categItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <section className="snew py-2">
        <h2 className="mt-5 text-center mb-5 fnf"> New Products </h2>
        <div className="menu-tabs container ">
          <div className="menu-tab d-flex justify-content-around">
            <button className="btW mb1 fnf px-3" onClick={() => setItems(Menu)}>
              All
            </button>
            <button
              className="btW mb1 fnf px-3"
              onClick={() => filterItem("men")}
            >
              Men
            </button>
            <button
              className="btW mb1 fnf px-3"
              onClick={() => filterItem("women")}
            >
              Women
            </button>
            <button
              className="btW mb1 fnf px-3"
              onClick={() => filterItem("kids")}
            >
              Kids
            </button>
          </div>
        </div>
        <div className="menu-items container-fluid mt-2">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {items.map((elem) => {
                  const { image, name, number, disc, price, place, width } =
                    elem;

                  return (
                    <div className="col-md-2 di5 mb ">
                      <Link to="/bookorder">
                        <img src={image} className="sl " />
                      </Link>
                      <p className="pr"> {name} </p>
                      <span className="istar">
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <FaStar className="star" />
                        <p className="nmm"> ^ {number} </p>
                      </span>
                      <span className="dscc">
                        <p className="dsc"> {disc} </p>
                        <BiRupee className="sgn" />
                        <p className="prc"> {price} </p>
                      </span>
                      <p className="pl"> {place} </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tabs;
