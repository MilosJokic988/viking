import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import vegvisir from '../assets/icons/vegvisir.png';
import backgroundMusic from '../assets2/music/background-music.mp3';


const Home = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.volume = 0.2;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.log("User gesture required to start audio:", err);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  

  return (
    <div className="home-container">
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleAudio} className="audio-button">
        {isPlaying ? "⏸️ Stop Music" : "▶️ Play Music"}
      </button>

      <img src={vegvisir} alt="Vegvisir" className="vegvisir-icon" />

      <main className="home-content">
        <h1 className="mb-4">The Saga of the Vikings</h1>
        <p>Journey through time to the frozen seas of the North, where honor is carved in blood, and the gods themselves forge war.</p>

        <Link to="/register" className="glowing-rune" title="Join the Brotherhood">
          ᚠ
        </Link>

       

      
      </main>
    </div>
  );
};

export default Home;