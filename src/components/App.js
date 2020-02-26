import React from "react";

import Header from "./Header";
import Services from "./Services";
import Checklist from "./Checklist";
import "./app.css";

// font-family: 'Limelight', ;
// font-family: 'Bungee Shade', ;
// font-family: 'Permanent Marker', ;
// font-family: 'Special Elite', ;

const App = () => {
  return (
    <div>
      <Header />
      <Services />
      <Checklist />
    </div>
  );
};

export default App;
