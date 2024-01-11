import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import Userstats from "./Userstats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<Userstats />} />
      </Routes>
    </section>
  );
};

export default User;
