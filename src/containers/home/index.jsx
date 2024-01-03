import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

export default function Home() {
  const navigate = useNavigate();
  const handleNavigateToContactMe = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translatex(0px)" }}
      >
        <div className="home__text-wrapper">
          <h1>
            Hello, I'm Jijo <br />
            Front end developer
          </h1>
        </div>

        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMe}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
}
