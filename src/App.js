import "./assets/js/util.js";

import { ThemeProvider } from "./features/theme";
import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes, useLocation } from "react-router-dom";

import BodyComponent from "./main";

function App() {
  const location = useLocation();
  console.log("pathname", location.pathname);

  const [themeName, setThemeName] = useState("main");
  useEffect(() => {
    // Your theme name determining logic
    setThemeName("dark");
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider value={themeName}>
        <Routes>
          <Route exact path="/" element={<BodyComponent />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
