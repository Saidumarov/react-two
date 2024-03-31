import { Link, Outlet, useNavigate } from "react-router-dom";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header({ login }) {
  const navegate = useNavigate();
  if (login) {
    return (
      <>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <header>
          <div className="container">
            <div className="header">
              <Link to={"/"}>
                <h1>Students app</h1>
              </Link>
              <div className="header_div">
                <Link to={"/profile"}>Profile</Link>
                <button onClick={() => navegate("/add")}>Add</button>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  } else {
    return;
  }
}

export default Header;
