import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/custom.scss";
import Navigation from "./components/Navigation/Navigation";
import NoticeAlert from "./components/NoticeAlert/NoticeAlert";
import HeroBanner from "./components/HeroBanner/HeroBanner";

function App() {
  return (
    <div className="App">
      <Navigation />
      <NoticeAlert />
      <HeroBanner />
    </div>
  );
}

export default App;
