import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiJavascript } from "react-icons/di";

const personalDetails = [
  {
    label: "Name",
    value: "Jijomon js",
  },
  {
    label: "Age",
    value: "25",
  },
  {
    label: "Address",
    value: "Trivandrum Kerala",
  },
  {
    label: "Email",
    value: "jijomonjs@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8136971120",
  },
  {
    label: "Primary Education",
    value: "B.Tech in Information & Technology",
  }
];
const jobSummary =
  " A self-taught individual with strong multitasking abilities and a dedicated work ethic. Possesses effective teamwork, problem-solving and organizational skills. Willing to take on various responsibilities to support the team and known for being a reliable and committed collaborator with a diligent and resourceful approach.";

export default function About() {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-1000px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}:</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translatex(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaReact size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiMongodb size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiJavascript
                  size={60}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
