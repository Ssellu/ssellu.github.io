import React from "react";
import { createTheming } from "react-color-theme";

export const [ThemeProvider, useTheme, themes] = createTheming(
  // The first argument is the default theme, it must contain default values for all possible colors.
  {
    background: "#282836",
    foreground: "#3D2C8D",
    text: "#fff",
    primary: "#C996CC",
    secondary: "#916BBF",
  },

  // The second argument is the object containing all named themes. A named theme might miss some colors,
  // in this case a corresponding value from the default theme will be used.
  {
    dark: {
      background: "#282836",
      foreground: "#3D2C8D",
      text: "#fff",
    },
    light: {
      background: "#fff",
      foreground: "#eee",
      text: "#333",
    },
  }
);
