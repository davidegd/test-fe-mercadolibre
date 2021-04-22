import React from "react";
import { Helmet } from "react-helmet-async";

export const SeoWrapper = ({ title, content }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "es" }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `content`,
          content: content,
        },
        {
          name: `og:title`,
          content: title,
        },
        {
          property: `og:content`,
          content: content,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:content`,
          content: content,
        },
      ]}
    />
  );
};
