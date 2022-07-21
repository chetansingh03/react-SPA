import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";

import Nav from "./nav";
import Nv, { Corousel, Off, Sale } from "./navv";
import { Footer } from "./brands";

import Brands from "./brands";
import Tabs from "./new";
import Book from "./bookorder";
import OrderSuccess from "./success";
import Signup from "./signup";
import Login from "./login";
import Men from "./mens";
import Women from "./women";
import Kids from "./kids";
import Top from "./toprated";
import Brand from "./brand";
import Access from "./accessories";
import Sales from "./sale";
function A() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Nv />
                <Corousel />
                <Off />
                <Sale />
                <Brands />
                <Footer />
              </>
            }
          />
          <Route
            path="/new"
            element={
              <>
                <Nav />
                <Nv />
                <Tabs />
                <Footer />
              </>
            }
          />
          <Route
            path="/bookorder"
            element={
              <>
                <Nav />
                <Nv />
                <Book />
                <Footer />
              </>
            }
          />
          <Route
            path="/success"
            element={
              <>
                <Nav />
                <Nv />
                <OrderSuccess />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Signup />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/men"
            element={
              <>
                <Nav />
                <Nv />
                <Men />
                <Footer />
              </>
            }
          />
          <Route
            path="/women"
            element={
              <>
                <Nav />
                <Nv />
                <Women />
                <Footer />
              </>
            }
          />
          <Route
            path="/kids"
            element={
              <>
                <Nav />
                <Nv />
                <Kids />
                <Footer />
              </>
            }
          />
          <Route
            path="/rated"
            element={
              <>
                <Nav />
                <Nv />
                <Top />
                <Footer />
              </>
            }
          />
          <Route
            path="/brands"
            element={
              <>
                <Nav />
                <Nv />
                <Brand />
                <Footer />
              </>
            }
          />
          <Route
            path="/access"
            element={
              <>
                <Nav />
                <Nv />
                <Access />
                <Footer />
              </>
            }
          />
          <Route
            path="/sale"
            element={
              <>
                <Nav />
                <Nv />
                <Sales />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default A;
