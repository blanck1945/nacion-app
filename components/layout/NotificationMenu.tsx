import React from "react";
import { FaRegBell } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaFaceSmileBeam } from "react-icons/fa6";

const NotificationMenu = () => {
  return (
    <div className="flex items-center gap-4">
      <FaRegBell className="text-white text-2xl cursor-pointer" />
      <CiHeart className="text-white text-3xl cursor-pointer" />
      <FaFaceSmileBeam className="text-yellow-600 text-2xl cursor-pointer" />
    </div>
  );
};

export default NotificationMenu;
