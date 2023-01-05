import React from "react";
import cv from "../../assets/cv.pdf";

function CTA() {
  return (
    <div className="cta">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="tel:+233(0)244910550" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
