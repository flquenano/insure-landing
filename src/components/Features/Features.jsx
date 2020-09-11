import React from "react";
import "./_features.scss";

import Snappy from "assets/images/icon-snappy-process.svg";
import Affordable from "assets/images/icon-affordable-prices.svg";
import People from "assets/images/icon-people-first.svg";

import Feature from "./Feature.jsx";

const Features = () => {
  const features = [
    {
      icon: Snappy,
      header: "Snappy Process",
      text:
        "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
    },
    {
      icon: Affordable,
      header: "Affordable Prices",
      text:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
    },
    {
      icon: People,
      header: "People First",
      text:
        "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it."
    }
  ];

  return (
    <section className="features">
      <div className="features__header">
        <div className="features__line"></div>
        <h1 className="features__heading heading">We’re different</h1>
      </div>

      <div className="features__card-group">
        {features.map((feature) => (
          <Feature
            icon={feature.icon}
            header={feature.header}
            text={feature.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
