import "../assets/css/home.css";
import Header from "../components/header";
import Footer from "../components/footer";
import example from "../assets/example.png";
import github from "../assets/github.png";
import mail from "../assets/mail.png";
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
                height: "500px",
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
              <span className="slogan">Clutch Software</span>
              <span className="slogan">
                <b>"LILYUM"</b>
              </span>
              <br />
              <span style={{ color: "gray", fontSize: "20px" }}>
                Lilyum, OpenCV block diagram is an open-source application for
                developers
              </span>
              <span style={{ color: "gray", fontSize: "20px" }}>
                students and anyone who wants to learn image processing.
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
              height: "850px",
              width: "100%",
              backgroundColor: "#320838",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "280px",
              paddingRight: "280px",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                color: "#fff",
                fontSize: "60px",
                fontWeight: "600",
              }}
            >
              Getting Started
            </h1>
            <p style={{ color: "#fff", fontSize: "20px" }}>
              Always start the operations with the{" "}
              <b style={{ color: "#fb0072" }}>start</b> node and complete the
              operations with the <b style={{ color: "#fb0072" }}>finish </b>
              node.
            </p>
            <h2
              style={{
                color: "#fff",
                fontSize: "30px",
                fontWeight: "600",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              There are special rules for some nodes.
            </h2>
            <div
              style={{
                height: "473.5px",
                width: "505.5px",
                backgroundColor: "white",
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={example}
                alt="examplaImage"
                style={{
                  height: "470.5px",
                  width: "502.5px",
                  borderRadius: "15px",
                }}
              ></img>
            </div>
            <p
              style={{
                color: "#fff",
                fontSize: "20px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              If we look at the sample picture, the{" "}
              <b style={{ color: "#fb0072" }}>bitwise_not</b> node is only
              working with the <b style={{ color: "#fb0072" }}>ctvColor </b>{" "}
              node. You can look at the{" "}
              <b>
                <a style={{ cursor: "pointer" }}>documents</a>
              </b>{" "}
              to browse all these rules.
            </p>
          </div>
          <div className="heroInfo bgDot">
            <div
              style={{
                width: "100%",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <span className="slogan">
                Contribute to <b>"LILYUM"</b>
              </span>

              <br />
              <span style={{ color: "black", fontSize: "23px" }}>
                If you want to contribute to the project or if you want to
                examine the project
              </span>
              <span style={{ color: "black", fontSize: "23px" }}>
                you can look at our GitHub page or contact.
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <span style={{ cursor: "pointer", marginRight: "25px" }}>
                  <a href="https://github.com/Clutch-Software-Team/opencv-graphical-block-diagramming">
                    <img
                      src={github}
                      alt="myimage"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </a>
                </span>

                <span style={{ cursor: "pointer" }}>
                  <a href="mailto:clutchsoftwareteam@gmail.com">
                    <img
                      src={mail}
                      alt="myimage"
                      style={{ height: "60px", width: "60px" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
