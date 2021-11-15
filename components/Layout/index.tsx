import Head from "next/head";
import React, { FC, useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

const Layout: FC = ({ children }) => {
  const [useDark, setUseDark] = useState(false);

  const toggleTheme = () => {
    setUseDark(!useDark);
  }

  return (
    <div className={`${useDark ? "dark" : ""}`}>
    <div className={`flex flex-col bg-white dark:bg-black text-black dark:text-white justify-between h-screen`}>
      <Head>
        <title>Mike&apos;s Service Station, Sheffield PA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar useDark={useDark} toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </div>
    </div>
  );
};

export default Layout;
