import React from "react";
import { SeoWrapper } from "../components/seo";

export const PageWrapper = ({ children, title, description }) => {
  return (
    <>
      <SeoWrapper title={title} content={description} />
      {children}
    </>
  );
};
