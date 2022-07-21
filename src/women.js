import React from "react";
import { useState } from "react";

import "./main.css";
import Menu from "./menu3";
import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";

function Women() {
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
        <h2 className="mt-5 text-center mb-5 fnf"> Womens Wear </h2>
        <div className="menu-tabs container ">
          <div className="menu-tab d-flex justify-content-around">
            <button className="btW mb1 fnf px-3" onClick={() => setItems(Menu)}>
              All
            </button>
            <button
              className="btW mb1 fnf px-3"
              onClick={() => filterItem("indianwear")}
            >
              Indianwear
            </button>
            <button
              className="btW mb1 fnf px-3"
              onClick={() => filterItem("westernwear")}
            >
              Westernwear
            </button>

            <button
              className="btW mb1 fnf px-3"
              onClick={() => filterItem("footwear")}
            >
              Footwear
            </button>
            <button
              className="btW mb1 fnf px-3"
              onClick={() => filterItem("accessories")}
            >
              Accessories
            </button>
          </div>
        </div>
        <div className="menu-items container-fluid mt-2">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {items.map((elem) => {
                  const { image, name, from1, from2 } = elem;

                  return (
                    <div className="col-md-2 men1 men6">
                      <Link to="/women">
                        <img src={image} className="women1" />
                      </Link>
                      <p className="fnf men2"> {name} </p>
                      <p className="fnf men3">
                        From( <BiRupee className="women4" /> {from1}
                        <span className="women5">to</span>
                        <BiRupee className="women4 " /> {from2})
                      </p>
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
export default Women;
