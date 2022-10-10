import React, { ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "../../styles/Layout.module.css";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
