import React from "react";
import { useTheme } from "../features/theme";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, name, type }) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}

      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      {/* <script src="https://requirejs.org/docs/release/2.3.6/comments/require.js"></script> */}
    </Helmet>
  );
};

export default SEO;
