import "./index.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Achievements from "./components/Achievements";
import WhatDoWeDo from "./components/WhatDoWeDo";
import Description from "./components/Description";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Achievements />
      <WhatDoWeDo />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
