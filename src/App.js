import "./App.css";
import MenuBar from "./Components/menuBar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Section3 from "./Components/Section3";
import Section4 from "./Components/Section4";
import Footer from "./Components/Footer";
import { Spring } from "react-spring";

let style = {
  primaryColor: "#FFFFFF",
  secondaryColor: "#515151",
};
let styleAlt = {
  primaryColor: "#515151",
  secondaryColor: "#FFFFFF",
};

function App() {
  return (
    <div className="">
      <div className="text-center">
        <MenuBar
          primaryColor={style.primaryColor}
          secondaryColor={style.secondaryColor}
        ></MenuBar>

        <Section1
          primaryColor={style.secondaryColor}
          secondaryColor={style.primaryColor}
        ></Section1>
         </div>
        <Section2
          primaryColor={style.primaryColor}
          secondaryColor={style.secondaryColor}
        ></Section2>
        <div className="container text-center">
          <Section4
            primaryColor={style.primaryColor}
            secondaryColor={style.secondaryColor}
          ></Section4>
        </div>
     
      <Footer
        primaryColor={style.primaryColor}
        secondaryColor={style.secondaryColor}
      ></Footer>
    </div>
  );
}

export default App;
