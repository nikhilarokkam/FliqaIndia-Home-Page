import React, { useState, useEffect } from "react";
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import "./typewriter.css"

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWordProgress, setCurrentWordProgress] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["Photography?", "Videography?", "Graphics?"];

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentWordProgress((prevProgress) => prevProgress + 1);
    }, 200); // Typing speed

    const wordLength = words[currentWordIndex].length;

    if (currentWordProgress > wordLength) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentWordProgress(0);
      }, 1000); // Time to show the word before erasing
    }

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, currentWordProgress, words]);


  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
          <Heading
  subtitle='Welcome To FliqaIndia'
  title={
    <>
      Looking for {" "}
      <span className="typewriter">
        {words[currentWordIndex].substring(0, currentWordProgress)}
      </span>
      {" "}
    </>
  }
/>
            <p>Capturing Moments, Creating Memories – Explore the Art of Photography with FliqaIndia Unveil the Beauty of Every Frame, Creative Services Tailored for You. Discover the Magic Through FliqaIndia's Lens.</p>
            <div className='button'>
              <button className='primary-btn'>
                CALL US <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              {/* <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero;
