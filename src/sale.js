import "./main.css";
import { Link } from "react-router-dom";
function Sales() {
  return (
    <>
      <div className="nbg">
        <div className="container">
          <div className="row ">
            <h2 class="he mt-5 fnf">
              <b> Best OFFers and deals </b>
            </h2>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <figure className="cap3">
                <img src="./img/d1.webp" className="im1" />
                <figcaption className="capp">
                  <h4 class="h4 fnf"> Summer festival OFFers </h4>
                  <h6 class="h6 fnf">
                    Discount upto <b> 40% </b>
                  </h6>
                  <Link to="/sale">
                    <button class="but fnf">
                      <b> Check Now </b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="cap3">
                <img src="./img/d2.png" className="im2" />
                <figcaption className="capp fnf">
                  <h4 class="h4"> Traditional Wears </h4>
                  <h6 class="h6">
                    Upto <b> 50% </b> OFF
                  </h6>
                  <Link to="/sale">
                    <button class="but1">
                      <b> Check Now </b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="cap3">
                <img src="./img/d3.jpg" className="im3" />
                <figcaption className="capp fnf">
                  <h4 class="h4"> Sports wear </h4>
                  <h6 class="h6">
                    Upto <b> 30% </b> OFF
                  </h6>
                  <Link to="/sale">
                    <button className="but2">
                      <b> Check Now </b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <figure className="cap4">
                <img src="./img/d4.webp" className="im4" />
                <figcaption className="capp fnf">
                  <img src="./img/z.png" width="30%" className="zr" />
                  <h6 className="h6">
                    Upto <b> 55% </b> OFF
                  </h6>
                  <Link to="/sale">
                    <button className="but1">
                      <b> Check Now </b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="cap4">
                <img src="./img/d5.webp" className="im5" />
                <figcaption className="capp fnf">
                  <h4 className="h4"> Casuals wear </h4>
                  <h6 className="h6">
                    Upto <b> 60% </b> OFF
                  </h6>
                  <Link to="/sale">
                    <button className="but1">
                      <b> Check Now </b>
                    </button>
                  </Link>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-4">
              <figure className="cap4">
                <img src="./img/d6.jpg" className="im6" />
                <figcaption className="capp fnf">
                  <h4 class="h44"> Bags and Sunglasses </h4>
                  <h6 class="h6">
                    Min <b> 25% </b> OFF
                  </h6>
                  <Link to="/sale">
                    <button class="but2">
                      <b> Check Now </b>
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
export default Sales;
