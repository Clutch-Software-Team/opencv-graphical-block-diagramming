import "../assets/css/home.css";
import Header from "../components/header";
const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <Header />
        <div className="hero">
          <div className="heroInfo bgDot">
            <div
              style={{
                width: "100%",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <span className="slogan">
                Do your image processing ideas with
              </span>
              <span className="slogan">
                Clutch Software <b>LILYUM</b>
              </span>
              <span style={{ color: "gray" }}>
                opencv-graphical-block-diagramming
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <button className="playgroundBtn">
                  <a href="/opencv" className="aPlaygroundBtn">
                    Playground
                  </a>
                </button>
                <a className="aTag">Documentation</a>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "400px",
              width: "100%",
              backgroundColor: "#e84545",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
