import * as React from "react";
import Header from "../header";
import Footer from "../footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="animate-fadeIn">
      <Header siteTitle="Mon portfolio" />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;