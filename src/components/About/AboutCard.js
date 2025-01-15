import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saketh Reddy Poreddy</span>
            from <span className="purple">India.</span>
            <br />
            I am currently pursuing my master's in Cybersecurity Professional at Deakin University, Geelong, Victoria, Australia.
            <br />
            I have hands-on experience in ethical hacking, penetration testing, vulnerability assessment, network security, and cybersecurity analysis. 
            Additionally, I am working as a junior pentester at Hardhat Enterprises, where I focus on bug fixing and testing penetration testing tools like DDT.
            <br />
            <br />
            Apart from cybersecurity, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Security Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Blogging on Cybersecurity Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating with Cybersecurity Enthusiasts
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about building secure systems and constantly learning new techniques!"{" "}
          </p>
          <footer className="blockquote-footer">Saketh Reddy Poreddy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
