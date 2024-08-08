import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="z-10 dark:bg-black dark:text-white">{children}</div>;
};

export default Layout;
