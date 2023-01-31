import "./features/App.css";
import "./assets/css/main.css";
import "./assets/js/main.js";

import React, { useEffect } from "react";
import { useTheme } from "./features/theme";

import BodyWrapper from "./components/BodyWrapper";
import SEO from "./components/Head";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const BodyComponent = () => {
  const $ = require("jquery");
  const theme = useTheme();

  useEffect(() => {
    // Menu.
    var $menu = $("#menu"),
      $menu_openers = $menu.children("ul").find(".opener");

    // Openers.
    $menu_openers.each(function () {
      console.log($menu_openers);
      var $this = $(this);
      $this.on("click", function (event) {
        // Prevent default.
        event.preventDefault();

        // Toggle.
        $menu_openers.not($this).removeClass("active");
        $this.toggleClass("active");

        // Trigger resize (sidebar lock).
        $window.triggerHandler("resize.sidebar-lock");
      });
    });
  });

  return (
    <div className="is-preload">
      <SEO
        title="Happy Hacking with Ssellu!"
        description="Happy Hacking!"
        name="ssellu.lee@gmail.com"
        type="article"
      />

      <BodyWrapper>
        <Main />
        <Sidebar />
      </BodyWrapper>
    </div>
  );
};

BodyComponent.propTypes = {};

export default BodyComponent;
