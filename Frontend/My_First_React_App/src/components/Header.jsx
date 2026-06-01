import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <div className="text-primary fs-4 fw-bold">My Company</div>

        <div className="d-flex gap-4">
          <link to={"/"}>Home</link>
          <link to={"/about"}>About</link>
          <link to={"/product"}>Product</link>
          <link to={"/contact-us"}>Contact_Us</link>
        </div>

        <div className="d-flex gap-3">
          <link to={"/login"}>
            <button className="btn btn-outline-primary">Login</button>
          </link>

          <link to={"/register"}>
            <button className="btn btn-primary">Register</button>
          </link>
        </div>
      </div>
    </>
  );
}

export default Header;
