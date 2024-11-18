import React from "react";
import Sidebar from "../../../partials/Sidebar";
import Header from "../../../partials/Header";

const ProfilePage = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen p-4">
        <Header />
        </div>
    </div>
  );
};

export default ProfilePage