import React from "react";
import ReviewList from "../Review/ReviewList";
import ServiceHighlights from "../service/ServiceHighlights";
import HeroBanner2 from "../hero-banner2/HeroBanner2";
import HeroBanner from "../hero-banner/HeroBanner";
import OffertForm from "../offert/OffertForm";

function Home() {
  return (
    <>
      <HeroBanner2 />
      <ReviewList />
      <div id="services">
        <ServiceHighlights />
      </div>
      <div id="OffertForm">
        <OffertForm />
      </div>

    </>
  );
}

export default Home;
