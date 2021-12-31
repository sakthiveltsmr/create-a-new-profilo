import "./App.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Pages";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import Profile from "./Component/Footer/Profile";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 10,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      once: false,
    });
  });
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
