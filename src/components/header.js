import "../assets/css/header.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="headerMenu">
      <nav className="headerContainer">
        <div
          style={{
            marginLeft: "15px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src={logo}
            alt="clutch-icon"
            style={{ height: "55px", width: "75px" }}
          />
          <span
            style={{ marginLeft: "10px", fontSize: "25px", marginTop: "10px" }}
          >
            <b>Lilyum</b>
          </span>
        </div>
        <div className="routerContainer">
          <a className="aTag">Documentation</a>
          <a className="aTag">Examples</a>
          <button className="playgroundBtn">
            <a href="/opencv" className="aPlaygroundBtn">
              Playground
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
