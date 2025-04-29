import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Duel.css';

const Duel = () => {
  const [winner, setWinner] = useState(null);
  const [player1HP, setPlayer1HP] = useState(100);
  const [player2HP, setPlayer2HP] = useState(100);
  const navigate = useNavigate();

  const startDuel = () => {
    const player1Damage = Math.floor(Math.random() * 100) + 1;
    const player2Damage = Math.floor(Math.random() * 100) + 1;

    setPlayer1HP(player1Damage);
    setPlayer2HP(player2Damage);

    if (player1Damage > player2Damage) {
      setWinner('Player 1 Wins!');
    } else if (player2Damage > player1Damage) {
      setWinner('Player 2 Wins!');
    } else {
      setWinner('It\'s a draw!');
    }
  };

  const goHome = () => navigate('/');

  return (
    <Container className="duel-page">
      <div className="duel-container">
        <h2 className="duel-title">Viking Duel: Fight for Glory!</h2>

        <Row className="mb-4">
          <Col>
            <div className="duel-player">
              <h3>Player 1</h3>
              <div
                className="health-bar"
                style={{ width: `${player1HP}%` }}
              />
            </div>
          </Col>
          <Col>
            <div className="duel-player">
              <h3>Player 2</h3>
              <div
                className="health-bar"
                style={{ width: `${player2HP}%` }}
              />
            </div>
          </Col>
        </Row>

        <Button onClick={startDuel} className="duel-button">
          Start the Duel!
        </Button>

        {winner && (
          <div className="duel-winner">
            <h4>{winner}</h4>
            <Button onClick={goHome} className="return-home">
              Return to Home
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Duel;
