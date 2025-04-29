import React from 'react';
import './History.css';

const History = () => {
  return (
    <div className="history-container">
      <h1 className="history-title">Viking History</h1>
      <div className="history-timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>793 AD - Raid on Lindisfarne</h2>
            <p>The Viking Age began with the infamous raid on the monastery of Lindisfarne in England, marking the start of Norse expansion.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>865 AD - The Great Heathen Army</h2>
            <p>A massive Viking force invaded England, leading to years of battles and the eventual establishment of the Danelaw.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>982 AD - Erik the Red discovers Greenland</h2>
            <p>Erik the Red was exiled from Iceland and sailed west, where he discovered and named Greenland, founding the first Norse settlements.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>1000 AD - Leif Erikson reaches North America</h2>
            <p>Leif Erikson, son of Erik the Red, sailed further west and reached Vinland, believed to be part of modern-day Canada.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h2>1066 AD - End of the Viking Age</h2>
            <p>The death of King Harald Hardrada at the Battle of Stamford Bridge marked the decline of Viking dominance in Europe.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
