import "./main.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Book() {
  const navigate = useNavigate();
  const handelsubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };
  return (
    <>
      <section className="pt-4 fsec">
        <div className="container">
          <h4 className="mb-3 fnf  text-center">Biiling Details</h4>
          <form onSubmit={handelsubmit}>
            <div className="row">
              <div className="col-sm-6">
                <label for="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  id="name"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-sm-6">
                <label for="" className="form-label">
                  Last Name
                </label>
                <input
                  type=" text "
                  name=" "
                  id=" name"
                  className="form-control "
                  required
                />
              </div>

              <div className="col-12 ">
                <label for=" " className="form-label ">
                  Username
                </label>
                <div className="input-group ">
                  <span className="input-group-text ">@</span>
                  <input
                    type="password "
                    name=""
                    id="uname "
                    className="form-control "
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6 ">
                <label for=" " className="form-label ">
                  Email
                </label>
                <input
                  type="email "
                  name=" "
                  id=" "
                  className="form-control "
                  required
                />
              </div>

              <div className="col-sm-6 ">
                <label for=" " className="form-label ">
                  Phone
                </label>
                <input
                  type="number "
                  name=" "
                  id="phone "
                  className="form-control "
                  required
                />
              </div>
              <div className="col-md-3 ">
                <label for=" " className="form-label ">
                  Country/Region
                </label>
                <select name=" " id=" " className="form-control " required>
                  <option data-countryCode="AU" value=""></option>
                  <option data-countryCode="CN" value="">
                    India
                  </option>
                  <option data-countryCode="AU" value="">
                    Australia
                  </option>
                  <option data-countryCode="BR" value="">
                    Brazil
                  </option>
                  <option data-countryCode="CA" value="">
                    Canada
                  </option>
                  <option data-countryCode="CN" value="">
                    China
                  </option>

                  <option data-countryCode="CN" value="">
                    USA
                  </option>
                  <option data-countryCode="CN" value="">
                    Africa
                  </option>
                  <option data-countryCode="CN" value="">
                    Italy
                  </option>
                  <option data-countryCode="CN" value="">
                    France
                  </option>
                </select>
              </div>

              <div className="col-md-3 ">
                <label for=" " className="form-label ">
                  State
                </label>
                <input
                  type="text "
                  name=" "
                  id="add "
                  className="form-control "
                  required
                />
              </div>

              <div className="col-md-3 ">
                <label for=" " className="form-label ">
                  City
                </label>
                <input
                  type="text "
                  name=" "
                  id=" add"
                  className="form-control "
                  required
                />
              </div>
              <div className="col-md-3 ">
                <label for=" " className="form-label ">
                  Province
                </label>
                <input
                  type="text "
                  name=" "
                  id=" add"
                  className="form-control "
                  required
                />
              </div>
              <div className="form-check fc mt-2">
                <input
                  type="checkbox"
                  className="form-check-input  "
                  id="address "
                  required
                />
                <label for=" " className="form check label ">
                  Same address
                </label>

                <a href="">
                  <button className="fbt">Edit Address</button>
                </a>
              </div>
              <div className="col-sm-4 ">
                <label for=" " className="form-label ">
                  Postal Code
                </label>
                <input
                  type="number"
                  name=" "
                  id=" "
                  className="form-control "
                  required
                />
              </div>

              <div className="col-sm-3">
                <label for=" " className="form-label  ">
                  Payment
                </label>
                <select name=" " id=" " className="form-control " required>
                  <option value="delhi "></option>
                  <option value="delhi ">Credit Card</option>
                  <option value="Maharastra ">Debit Card</option>
                  <option value="Gujarat ">Net Banking</option>
                  <option value="Asam ">UPI</option>
                </select>
              </div>
              <div className="col-sm-5">
                <input
                  className="fpay"
                  type="number"
                  placeholder="UPI or Card Number"
                  required
                />
              </div>
              <div className="col-md-2 ">
                <input
                  type="submit"
                  value="Order"
                  className="bt btn-success mt-3 btt1"
                />
              </div>
              <div className="col-md-2 ">
                <input type="reset" value="Reset" className="mt-3 btt2" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Book;
