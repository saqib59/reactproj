import React, { useEffect, useState } from "react";

const MyComponent = ({ main__heading }) => {
  const names = [
    " Invest responsibly",
    " Invest ",
    "responsibly",
    "Invest responsibly",
    " Invest ",
    "responsibly",
    " Invest responsibly",
  ];
  const [text, setText] = useState(names[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < names.length - 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 5000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [currentIndex, names.length]);

  useEffect(() => {
    setText(names[currentIndex]);
  }, [currentIndex, names]);

  return (
    <>
      <div className="home__section__content__heading__main">
        {main__heading}
      </div>
    </>
  );
};

export default MyComponent;
