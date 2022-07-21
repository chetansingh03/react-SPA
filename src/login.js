import React from "react";
import "./main.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const hsubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <section className="log0">
        <div className="container  ">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4 mt-4 log1">
              <h3 className="text-center">Sign In</h3>
              <form
                onSubmit={hsubmit}
                className="log2"
                name="myForm"
                method="get"
              >
                <div className="formdesign" id="name">
                  <lable className="log3">Username</lable>
                  <input
                    type="text"
                    className="log4"
                    id="username"
                    name="fname"
                    required
                  />
                  <span className="formerror log5"> </span>
                </div>

                <div className="formdesign" id="pass">
                  <lable className="log3">Password</lable>
                  <br />

                  <input
                    type="password"
                    className="log6"
                    id="password"
                    name="fpass"
                    required
                  />
                  <span className="formerror log7"></span>
                </div>

                <input
                  type="checkbox"
                  className="log8"
                  id="checkbox"
                  required
                />
                <span className="log9">Remeber me</span>

                <Link to="/login" className="log10">
                  Forgot Password
                </Link>
                <input
                  className="but log11"
                  type="submit"
                  name="submit"
                  value="Log In"
                />
              </form>

              <p className="text-center">or</p>

              <Link to="/signup">
                <button className="log12">Create Account</button>
              </Link>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Login;
