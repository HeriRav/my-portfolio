import * as React from "react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="animate-fadeIn">
      <Header siteTitle="Mon portfolio" />
      <main>
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default Layout;