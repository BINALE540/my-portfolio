"use client";

import Typewriter from "typewriter-effect";

export default function TypewriterText() {
  return (
    <span className="text-teal-400">
      <Typewriter
        options={{
          strings: [
            "Rodney Binale Khabanje.",
            "a Software Developer.",
            "an Information Systems Specialist.",
            "a Linux & Systems Security Engineer."
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75,
        }}
      />
    </span>
  );
}