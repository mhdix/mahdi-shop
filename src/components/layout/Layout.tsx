import React from "react";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}

export default Layout;
