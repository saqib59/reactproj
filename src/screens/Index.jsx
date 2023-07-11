import React, { useState, useEffect } from "react";

import ContactWidget from "../components/ContactWidget";
import Comparisionsection from "../components/comparisionsection";
import Earn from "../components/Earn";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Homesection from "../components/Homesection";
import Loremimg from "../components/Loremimg";
import Secure from "../components/Secure";
import english from "../lang/english.json";
import hungarian from "../lang/hungarian.json";
import romanian from "../lang/romanian.json";



export default function Index() {

  useEffect(() => {
    if (document) {
      const stylesheet = document.createElement("link");
      stylesheet.rel = "stylesheet";
      stylesheet.href = "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css";
  
      document.head.appendChild(stylesheet);
    }
  }, []);
  const [language, setLanguage] = useState(
    window.localStorage.getItem("language") || "en"
  );

  const languages = {
    en: english,
    hu: hungarian,
    ro: romanian,
  };

  console.log(languages[language]);

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        data={languages[language]}
      />
      <Homesection data={languages[language]} />
      <Comparisionsection data={languages[language]} />
      <Secure data={languages[language]} />
      <Loremimg data={languages[language]} />
      <Earn data={languages[language]} />
      <ContactWidget data={languages[language]} />
      <Footer data={languages[language]} />
    </>
  );
}
