import React from "react";
import contact from "../assets/contact.PNG";

export const Footer = () => {
  return (
    <div className="d-flex justify-content-center  p-5 footer">
      {/* <img src={contact} width="10%" /> */}
      &nbsp; ©️ All Rights Reserved &nbsp;
      {new Date().getFullYear()} &nbsp; Tsering 🌱
    </div>
  );
};
