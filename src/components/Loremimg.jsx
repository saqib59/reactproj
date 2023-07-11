import Fade from "react-reveal/Fade";
import React from "react";
import { loremimgsecction } from "../assets";

export default function Loremimg({ data }) {
  return (
    <section className="loremimg__section">
      <div className="loremimg__section__img">
        <img src={loremimgsecction} alt="loremimgbackgroundimg" />
      </div>
      <div className="loremimg__section__content">
        <Fade bottom>
          <div className="loremimg__section__content__overlay">
            <div className="loremimg__section__content__overlay__heading">
              {data.four_heading}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
