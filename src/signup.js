import React from "react";
import "./main.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handelsubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <section className="col0 ">
        <div className="container">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4  ">
              <form onSubmit={handelsubmit} method="post" className="col1">
                <h3 className="text-center mb-4"> Sign Up</h3>
                <div className="form-group" id="name">
                  <lable className="col2">Username</lable>
                  <input
                    type="text"
                    className="form col3"
                    name="username"
                    required
                  />
                  <span className=" formerror col4"></span>
                </div>

                <div className="form-group" id="email">
                  <lable className="col2">Email</lable>
                  <input type="email" name="email" className="col5" required />
                  <span className=" formerror col4"></span>
                </div>

                <div id="password">
                  <lable className="col2">Password </lable>
                  <input
                    type="password "
                    name="password"
                    className="col6"
                    required
                  />
                  <span className=" formerror col44"></span>
                </div>
                <div className="form-group" id="confirm">
                  <lable className="col2">Confirm Password </lable>
                  <input
                    type="confirm "
                    name="confirm"
                    className="col7"
                    required
                  />
                  <span className="formerror col4"></span>
                </div>
                <input type="checkbox" id="checkbox" required />
                <span className="col8">
                  I agree to <span className="col9"> Terms of Use </span> and
                  <span className="col9">Privancy Policies</span>
                </span>
                <button name="submit" type="submit" className="col10">
                  Sign Up
                </button>
              </form>

              <div className="col11">
                <p className="text-center">or </p>

                <Link to="/login">
                  <button className="col12">Log In</button>
                </Link>
              </div>
            </div>

            <div className="col-sm-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
