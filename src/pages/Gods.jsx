import React, { useState } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import odinImg from '../images2/odin.jpg';
import thorImg from '../images2/thor.jpg';
import lokiImg from '../images2/loki.jpg';
import { useNavigate } from 'react-router-dom';

const gods = [
  {
    id: 1,
    name: 'Odin',
    image: odinImg,
    title: "Allfather",
    description: "Odin is the chief god of Norse mythology, associated with wisdom, war, and death. He sacrificed his eye to gain knowledge.",
  },
  {
    id: 2,
    name: 'Thor',
    image: thorImg,
    title: "God of Thunder",
    description: "Thor is the mighty god of thunder and protector of mankind, wielding his hammer Mjolnir to battle giants and other threats.",
  },
  {
    id: 3,
    name: 'Loki',
    image: lokiImg,
    title: "God of Mischief",
    description: "Loki is a trickster god known for his cunning and shape-shifting abilities. He often causes trouble for the gods but also helps them.",
  },
];

const Gods = () => {
  const [selectedGod, setSelectedGod] = useState(null);
  const navigate = useNavigate();

  const handleMoreClick = (god) => {
    setSelectedGod(god);
  };

  const handleBackClick = () => {
    setSelectedGod(null);
  };

  
  return (
    <Container className="mt-5 mb-5 pb-5">
      <h1 className="text-center mb-4 text-light" style={{ fontFamily: 'UnifrakturCook, cursive' }}>
        The Norse Gods
      </h1>

      {selectedGod ? (
        <div className="text-center fade-in">
          <img
            src={selectedGod.image}
            alt={selectedGod.name}
            className="god-image-selected"
          />
          <h2 className="text-warning mt-3" style={{ fontFamily: 'Cinzel, serif' }}>{selectedGod.name}</h2>
          <p style={{ color: '#fff' }}>{selectedGod.description}</p>
          <Button variant="outline-light" onClick={handleBackClick}>BACK</Button>
        </div>
      ) : (
        <Row>
          {gods.map((god) => (
            <Col key={god.id} lg={4} md={6} sm={12} className="mb-4">
              <Card className="bg-dark text-light shadow-lg border-warning" style={{ minHeight: '100%' }}>
                <div className="image-container-small mx-auto mt-3 mb-3">
                  <Card.Img variant="top" src={god.image} className="god-image-small" />
                </div>
                <Card.Body>
                  <Card.Title className="text-warning" style={{ fontFamily: 'Cinzel, serif' }}>{god.name}</Card.Title>
                  <Card.Text style={{ color: '#fff' }}>{god.description}</Card.Text>
                  <Button variant="outline-warning" onClick={() => handleMoreClick(god)}>More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

    
    </Container>
  );
};

export default Gods;
