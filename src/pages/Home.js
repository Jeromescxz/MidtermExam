import Nav from "../components/Nav";
import React, { useState } from "react";
import "../App.css";

function Home() {
  return (
    <div>
      <Nav />
      <div className="logo">
        <h1 id="vet_name">
          {" "}
          FUR PET {"\n"} VETERINARY {"\n"} CLINIC{" "}
        </h1>
        <h2 id="vet_tg"> Taking care of your pet is our passion. </h2>
        <h4 id="vet_desc">
          {" "}
          Fur Pet Veterinary Clinic is 24/ 7 animal hospital that will serve
          your pet.{" "}
        </h4>
      </div>
    </div>
  );
}

export default Home;
