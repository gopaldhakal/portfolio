import React from "react";
import Header from "./features/ui/Header";
import Main from "./features/home/Main";
import Tech from "./features/home/Tech";
import Info from "./features/home/Info";
import Footer from "./features/home/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Tech />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
