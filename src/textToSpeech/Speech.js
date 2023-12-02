import React from "react";

export default function speech(textToRead) {
  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance(textToRead);
    speechSynthesis.speak(speech);
  } else {
    alert(
      "Text-to-speech is not supported in your browser. Please use a modern browser."
    );
  }
}
