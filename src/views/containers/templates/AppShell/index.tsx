import Head from "next/head";
import React, { useEffect } from "react";
import icon from "../../../../../public/assets/images/company/company-logo.png";
import Navbar from "@/views/components/molecules/Navbar";
import FooterSection from "../../organisms/FooterSection";
import AOS from "aos";
import "aos/dist/aos.css";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>{`Aflah Apparel`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={"home"} />
        <link rel="icon" href={icon.src} />
        <link rel="apple-touch-icon" href={icon.src} />
      </Head>
      <main className={`min-h-screen overflow-hidden p-8`}>
        <Navbar />
        <div className="min-h-screen py-20">{children}</div>
        <FooterSection />
      </main>
    </>
  );
};

export default AppShell;
