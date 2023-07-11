import Fade from "react-reveal/Fade";
import React from "react";
import { obsessivelysecure } from "../assets";

export default function Secure({ data }) {
  return (
    <Fade bottom>
      <section className="obsessivelysecure__section">
        <div className="obsessivelysecure__section__content">
          <div className="obsessivelysecure__section__content__left">
            <img
              className="obsessivelysecure__section__content__left__img"
              src={obsessivelysecure}
              alt="obsessivelysecuresectionimg"
            />
          </div>
          <div className="obsessivelysecure__section__content__left">
            <div className="obsessivelysecure__section__content__left__heading">
              {data.section_third_first} <span>{data.section_third_last}</span>
            </div>
            <div className="obsessivelysecure__section__content__left__info">
              {data.third_para}
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
