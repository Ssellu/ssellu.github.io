import "./assets/js/util.js";

import { ThemeProvider } from "./features/theme";
import React, { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import BodyComponent from "./main";

function App() {
  const [themeName, setThemeName] = useState("main");
  useEffect(() => {
    // Your theme name determining logic
    setThemeName("dark");
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider value={themeName}>
        <BodyComponent />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
