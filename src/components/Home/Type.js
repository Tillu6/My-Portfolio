import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cybersecurity Enthusiast",
          "Penetration Tester",
          "Aspiring Network Security Specialist",
          "Vulnerability Assessor",
          "Python and Bash Scripter",
          "Open Source Contributor",
          "Aspiring Cybersecurity Analyst"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
