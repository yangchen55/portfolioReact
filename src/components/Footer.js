import React from "react";
import contact from "../assets/contact.PNG";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container py-3 mt-3">
          <img src={contact} width="10%" /> &nbsp; &nbsp; ©️ all reserved 2022
          || Tsering
        </div>
      </div>
    </div>
  );
};
