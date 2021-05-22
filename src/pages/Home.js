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
                Clutch Software  
              </span>
              <span className="slogan">
              <b>LILYUM</b>
              </span>
              <br />
              <span style={{ color: "gray" }}>
              Lilyum, OpenCV block diagram is an open-source application for developers 
              </span> 
              <span style={{ color: "gray" }}> 
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
              height: "400px",
              width: "100%",
              backgroundColor: "#320838",
            }}
          ><p style={{color:"white"}}>asdadasdasdas</p></div>
        </div>
      </div>
    </>
  );
};

export default Home;
