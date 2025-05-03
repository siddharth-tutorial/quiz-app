
import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Modal, Badge } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';
function Result() {
  const location = useLocation();
  const { score, totalQuestions, correct, incorrect } = location.state || {};

  const [showModal, setShowModal] = useState(true);
  const passed = score >= totalQuestions / 2;

  useEffect(() => {
    document.body.style.backgroundColor = passed ? '#d1e7dd' : '#f8d7da';     return () => {
      document.body.style.backgroundColor = 'white'; 
    };
  }, [passed]);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="p-4 shadow text-center" style={{ width: '100%', maxWidth: '500px' }}>
        <Card.Title className="fs-3 mb-4">Quiz Results</Card.Title>
        <Card.Text>
          <h4>
            Score: <Badge bg={passed ? 'success' : 'danger'}>{score} / {totalQuestions}</Badge>
          </h4>
        </Card.Text>
        <Card.Text>
          <span className="text-success">Correct: {correct}</span><br />
          <span className="text-danger">Incorrect: {incorrect}</span>
        </Card.Text>
        <Link to="/">
          <Button variant="primary" className="mt-3">Go to Home</Button>
        </Link>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton className={passed ? 'bg-success text-white' : 'bg-danger text-white'}>
          <Modal.Title>{passed ? '🎉 Congratulations!' : '❌ Quiz Failed'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {passed
            ? 'Great job! You passed the quiz with a solid score.'
            : 'Oops! Better luck next time. Review the material and try again.'}
        </Modal.Body>
        <Modal.Footer>
          <Button variant={passed ? 'success' : 'danger'} onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Result;


