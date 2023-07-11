import { Menu, X } from "react-feather";
import React, { useEffect, useState } from "react";
import { headerlogo, usa } from "../assets/index";

import ClickAwayListener from "react-click-away-listener";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

export default function Header({ language, setLanguage, data }) {
  const [isOpen, setIsOpen] = useState(false);
  function changeNavState() {
    if (window.innerWidth < 1060) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useEffect(() => {
    changeNavState();
    window.addEventListener("resize", changeNavState);
    window.addEventListener("scroll", () => {
      changeNavState();
    });
  }, []);

  return (
    <div
      className="header"
      style={
        isOpen && window.innerWidth < 1060
          ? { backgroundColor: "#fffff" }
          : null
      }
    >
      <Fade top duration={900}>
        <div className="header__content">
          <NavLink to="/" className="header__content__logo">
            <img src={headerlogo} alt="logo" />
          </NavLink>
          {isOpen && (
            <ClickAwayListener
              onClickAway={() => {
                if (window.innerWidth < 1060) {
                  setIsOpen(false);
                }
              }}
            >
              <div className="header__content__nav">
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="header__content__nav__link"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {data.navbar_1}
                </NavLink>
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="header__content__nav__link"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {data.navbar_2}
                </NavLink>
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="header__content__nav__link"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {data.navbar_3}
                </NavLink>
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="header__content__nav__link"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {data.navbar_4}
                </NavLink>
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="header__content__nav__link"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                >
                  {data.navbar_5}
                </NavLink>
                <NavLink
                  to="/"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                  className="header__content__nav__link__button"
                >
                  {data.contact_us}
                </NavLink>
                <NavLink
                  to="/"
                  onClick={() => {
                    if (window.innerWidth < 1060) {
                      setIsOpen(false);
                    }
                  }}
                  className="header__content__cta__button__login"
                >
                  {data.contact_us}
                </NavLink>
                <div className="custom__select">
                  <img
                    src={
                      language === "en"
                        ? "https://cdn-icons-png.flaticon.com/512/10576/10576632.png"
                        : language === "hu"
                        ? "https://cdn-icons-png.flaticon.com/512/10600/10600970.png"
                        : "https://cdn-icons-png.flaticon.com/512/197/197587.png"
                    }
                  />
                  <select
                    onChange={(e) => {
                      setLanguage(e.target.value);
                      window.localStorage.setItem("language", e.target.value);
                    }}
                  >
                    <option value="en">Eng</option>
                    <option value="hu">Hun</option>
                    <option value="ro">Rom</option>
                  </select>
                </div>
              </div>
            </ClickAwayListener>
          )}
          <div className="custom__select__two">
            <img
              src={
                language === "en"
                  ? "https://cdn-icons-png.flaticon.com/512/10576/10576632.png"
                  : language === "hu"
                  ? "https://cdn-icons-png.flaticon.com/512/10600/10600970.png"
                  : "https://cdn-icons-png.flaticon.com/512/197/197587.png"
              }
            />
            <select
              onChange={(e) => {
                setLanguage(e.target.value);
                window.localStorage.setItem("language", e.target.value);
              }}
            >
              <option value="en">Eng</option>
              <option value="hu">Hun</option>
              <option value="ro">Rom</option>
            </select>
          </div>

          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            title={isOpen ? "Close" : "Open"}
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </Fade>
    </div>
  );
}
