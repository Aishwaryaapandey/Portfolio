import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aishwarya Pandey </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I have a passion for coding and love tackling challenging projects.
            <br />
            I am a final-year student at Jaypee Institute of Information Technology (JIIT) Noida, specializing in Electronics and Communication Engineering (ECE).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> listening to my favorite music
            </li>
            <li className="about-activity">
              <ImPointRight /> unwinding with a good movie
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work towards creating something that truly impacts the world!"{" "}
          </p>
          <footer className="blockquote-footer">Aishwarya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
