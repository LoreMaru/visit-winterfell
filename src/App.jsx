import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import winterfell from "./static/Winterfell2.png";
import { Icon } from "@iconify/react";
import MapContent from "./components/MapContent";
import Footer from "./components/Footer";
import "./App.css";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [getPlace, setPlace] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".mapDot",
      { color: "#4E697E", yoyo: true },
      { color: "#C4C1C1", duration: 1, repeat: -1, repeatDelay: 0, yoyo: true }
    );

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainSection",
        start: "top 80%",
        end: "50% 50%",
        scrub: 2,
        toggleAction: "play pause resume reset",
      },
    });
    mainTl
      .fromTo(
        ".mainTitleWelcome",
        { x: `-${window.innerWidth}`, scale: 0 },
        { x: 0, scale: 1 }
      )
      .fromTo(
        ".mainTitleText",
        { color: "#4e697e;", scale: 0 },
        { color: "rgb(196, 193, 193)", scale: 1 },
        "<"
      )
      .fromTo(".starkFlag", { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <div className="App">
      <DeviceOrientation lockOrientation={"landscape"}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation="landscape" alwaysRender={false}>
          <div className="hero">
            <div className="title">
              <h1>Winterfell</h1>
              <h2>Capital of the north</h2>
            </div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bc8831a4-ebfd-4a77-93d5-9772cb2724b1/d9nitiy-9a1cee0d-db6b-4c18-8a39-fd7e221e1739.jpg/v1/fill/w_1024,h_576,q_75,strp/stark_banner_and_winterfell_study_by_aidanjwar_d9nitiy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYmM4ODMxYTQtZWJmZC00YTc3LTkzZDUtOTc3MmNiMjcyNGIxXC9kOW5pdGl5LTlhMWNlZTBkLWRiNmItNGMxOC04YTM5LWZkN2UyMjFlMTczOS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.84Nww2ZEBhK4Q98zLCDzG_nER38LgyJskB5-D5ydp24"
              alt="stark-bannerman"
            />
            <h2 className="scrollIcon">
              <Icon icon="iconoir:mouse-scroll-wheel" />
            </h2>
          </div>
          <div className="mainSection">
            <div className="mainTitle">
              <h2 className="mainTitleWelcome">Welcome to Winterfell</h2>
              <h3 className="mainTitleText">
                Ancestral castle and seat of power of House Stark
              </h3>
            </div>
            <img
              src="https://i.pinimg.com/originals/2d/fb/cc/2dfbccd75fe01fb39475f856efd11c95.jpg"
              alt="stark-flag"
              className="starkFlag"
            />
            <h3 className="mainDescription">
              At the end of Kingsroad, at the eastern edge of Wolfswood, where
              winter never ends
            </h3>
          </div>
          <div
            className="map"
            id="map"
            style={{
              background: `url(${winterfell})`,
              backgroundSize: "100% 100%",
            }}
          >
            <div className="div1">
              <a href="#content" className="mapDot" onClick={() => setPlace(1)}>
                <Icon icon="vaadin:dot-circle" />
              </a>
            </div>
            <div className="div2">
              <a href="#content" className="mapDot" onClick={() => setPlace(2)}>
                <Icon icon="vaadin:dot-circle" />
              </a>
            </div>
            <div className="div3">
              <a href="#content" className="mapDot" onClick={() => setPlace(3)}>
                <Icon icon="vaadin:dot-circle" />
              </a>
            </div>
            <div className="div4">
              <a href="#content" className="mapDot" onClick={() => setPlace(4)}>
                <Icon icon="vaadin:dot-circle" />
              </a>
            </div>
            <div className="div5">
              <a href="#content" className="mapDot" onClick={() => setPlace(5)}>
                <Icon icon="vaadin:dot-circle" />
              </a>
            </div>
            <div className="div6">
              <a href="#content" className="mapDot" onClick={() => setPlace(6)}>
                <Icon icon="vaadin:dot-circle" />
              </a>
            </div>
          </div>
          <div className="content" id="content">
            <MapContent getPlace={getPlace} />
            <Footer />
          </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation="portrait" alwaysRender={false}>
          <div className="rotateMSG">
            <p>Please rotate your device</p>
            <Icon icon="arcticons:auto-auto-rotate" />
          </div>
        </Orientation>
      </DeviceOrientation>
    </div>
  );
}

export default App;
