import "../assets/css/document.css";
import Header from "../components/header";
import customNodes from "../constants/nodes";
import upArrow from "../assets/img/upArrow.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Document = () => {
  const nodes = customNodes;
  return (
    <div id="top">
      <Header />
      <div className="docContainer">
        <div className="navBar">
          <a style={{ cursor: "pointer", marginLeft: 0 }}>
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

          <a style={{ cursor: "pointer", marginLeft: 0 }}>
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
            <AnchorLink style={{ cursor: "pointer" }} href={`#${index - 1}`}>
              <div className={"nodes"} key={index}>
                <span style={{ marginLeft: "10px" }}>
                  <a style={{ cursor: "pointer" }}>{node.data.label}</a>
                </span>
              </div>
            </AnchorLink>
          ))}
        </div>
        <div className="documents">
          <h2 style={{ alignSelf: "flex-start" }} id="Introduction">
            Introduction
          </h2>
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
          <h2 style={{ alignSelf: "flex-start" }} id="GettingStarted">
            Getting Started
          </h2>
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

          {nodes.map((node, index) => (
            <div key={index}>
              <h4
                style={{ alignSelf: "flex-start", textDecoration: "underline" }}
                id={`${index}`}
              >
                {node.data.label}
              </h4>
              <p>{node.data.infoNodes}</p>
            </div>
          ))}
        </div>
        <AnchorLink style={{ cursor: "pointer" }} href={`#top`}>
          <span style={{ position: "fixed", right: "30px", bottom: "30px" }}>
            <img
              src={upArrow}
              alt="myimage"
              style={{ height: "50px", width: "50px" }}
            />
          </span>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Document;
