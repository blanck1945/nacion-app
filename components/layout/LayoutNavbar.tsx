import React from "react";
import HambMenu from "./HambMenu";
import SearchBar from "./SearchBar";
import NotificationMenu from "./NotificationMenu";

const LayoutNavbar = () => {
  return (
    <nav className="bg-slate-800 bg-opacity-90 flex items-center justify-between px-4 h-16 z-10 relative">
      <HambMenu />
      <SearchBar />
      <NotificationMenu />
    </nav>
  );
};

export default LayoutNavbar;
