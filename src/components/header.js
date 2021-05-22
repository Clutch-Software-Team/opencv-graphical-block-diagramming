import "../assets/css/header.css";
const Header = () => {
  return (
    <header className="headerMenu">
      <nav className="headerContainer">
        <div>
          <a>logo</a>
        </div>
        <div className="routerContainer">
          <a className="aTag">Documentation</a>
          <a className="aTag">Examples</a>
          <a className="aTag">About</a>
          <button className="playground">
            <a href="/opencv" className="aPlayground">
              Playground
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
