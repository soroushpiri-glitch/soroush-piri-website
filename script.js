function sayWelcome() {
    const message = "Welcome to my personal website. I'm glad you're here!";
    const speech = new SpeechSynthesisUtterance(message);

    speech.rate = 1;     // speed (0.5 slow – 2 fast)
    speech.pitch = 1;    // tone (0 low – 2 high)
    speech.volume = 1;   // volume (0 – 1)

    window.speechSynthesis.speak(speech);
}