import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-color text-white">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6">
            <ul className="d-flex justify-content-around list-unstyled pt-1">
              <li className="fw-bold pt-2 ">
                <Link className="text-white navbarHover text-decoration-none" to="/">
                  Vücut Kitle İndeksi Hesapla
                </Link>
              </li>
              <span className="fs-5 pt-1 d-none d-lg-block">|</span>
              <li className="fw-bold pt-2">
                <Link className="text-white navbarHover text-decoration-none" to="/bmi">
                  Vücut Kitle İndeksi Nedir
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
