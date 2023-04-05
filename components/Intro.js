import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Fade } from "react-reveal";
import MyImage from "../public/mhshuvo.png";

function Intro({ goTo }) {
  const [index, setIndex] = useState(0);
  const texts = ["committed", "passionate", "fast-learner", "selt-taught"];

  const introRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  if (goTo) {
    introRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div
      className="my-container lg:h-screen flex items-center justify-center lg:justify-between flex-wrap pt-36 pb-10 lg:py-14 gap-10"
      ref={introRef}
    >
      <Fade bottom>
        <div className="space-y-10 lg:w-6/12">
          <p className="text-gray-600 uppercase">Welcome to my world</p>
          <div className="flex gap-2 sm:gap-5 items-center text1">
            <h2>Hi, I’m MH Shuvo</h2>
            <p className="animate-wave">👋</p>
          </div>
          <div className="text2 relative text-primary">
            <p>A</p>
            <p id="animated-text" className="italic">
              {texts.map((text, i) => (
                <span
                  key={i}
                  className={`absolute top-0 left-7 transform transition-transform duration-500 ${
                    i === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  {text}
                </span>
              ))}
            </p>
            <p className="absolute top-5 left-0 sm:top-0 sm:left-36 md:left-48 w-full">
              full stack developer
            </p>
          </div>
          <div>
            <a
              className="bg-secondary border-primary px-6 py-2 rounded-full font-light"
              href="https://drive.google.com/file/d/1kO6sGCsUXSYhVbmSivzIrhU_aispKpcJ/view?usp=share_link"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </Fade>
      <Image
        src={MyImage}
        alt={MyImage}
        className="w-5/12 lg:w-3/12 animate-mypicture"
      />
    </div>
  );
}

export default Intro;