import React from "react";
import OurFaculty from "../ourf/OurFaculty";
import Welcome from "../Welcome/Welcome";
import Header from "../Header";
import Schoolimg from "../schoolimg/Schoolimg";
import OurFacility from "../OurFacility/OurFacility";
import HomeLast from "../HomeLast/HomeLast";
import Cards from "../Cards/Cards";

function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Cards/>
      <OurFaculty />
      <OurFacility />
      <Schoolimg />
      <HomeLast />
    </div>
  );
}

export default Home;
