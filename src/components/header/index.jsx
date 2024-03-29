import { Outlet, useNavigate } from "react-router-dom";
import "./index.scss";
import StyledComponent from "../styledComponent";

function Header() {
  const navegate = useNavigate();
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <h1 onClick={() => navegate("/")}>Students app</h1>
            <StyledComponent onClick={() => navegate("/add")}>
              Add
            </StyledComponent>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
