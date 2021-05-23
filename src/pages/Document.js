import "../assets/css/document.css";
import Header from "../components/header";
import customNodes from "../constants/nodes";

const Document = () => {
  const nodes = customNodes;
  return (
    <>
      <Header />
      <div className="docContainer">
        <div className="navBar">
          <a style={{ cursor: "pointer", marginLeft: 0 }} href="#deneme">
            <div className="mainNav">
              <span
                style={{
                  color: "#fb0072",
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: 600,
                }}
              >
                Introduction
              </span>
            </div>
          </a>

          <a style={{ cursor: "pointer", marginLeft: 0 }} href="#deneme">
            <div className="mainNav">
              <span
                style={{
                  color: "#fb0072",
                  marginLeft: "15px",
                  marginRight: "15px",
                  fontWeight: 600,
                }}
              >
                Getting Started
              </span>
            </div>
          </a>

          <span style={{ color: "gray", marginLeft: "15px", fontWeight: 600 }}>
            Nodes
          </span>
          {nodes.map((node, index) => (
            <a style={{ cursor: "pointer" }} href="#2">
              <div className={"nodes"} key={index}>
                <span style={{ marginLeft: "10px" }}>
                  <a style={{ cursor: "pointer" }}>{node.data.functionName}</a>
                </span>
              </div>
            </a>
          ))}
        </div>
        <div className="documents">
          <h2 style={{ alignSelf: "flex-start" }}>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr
            style={{
              width: "90%",
              border: "1px solid gray",
              margin: 0,
              opacity: 0.2,
              marginBottom: "30px",
            }}
          />
          <h2 style={{ alignSelf: "flex-start" }}>Getting Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <hr
            style={{
              width: "90%",
              border: "1px solid gray",
              margin: 0,
              opacity: 0.2,
              marginBottom: "30px",
            }}
          />
          <h2 style={{ alignSelf: "flex-start", marginBottom: "25px" }}>
            Nodes
          </h2>
          <h4 style={{ alignSelf: "flex-start" }}>Start Node</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4 style={{ alignSelf: "flex-start" }}>Sobel Node</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4 style={{ alignSelf: "flex-start" }}>Normalize Node</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4 style={{ alignSelf: "flex-start" }}>Convert Scale Abs Node</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4 style={{ alignSelf: "flex-start" }}>Blur Node</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h4 style={{ alignSelf: "flex-start" }}>Box Filter Node</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Document;
