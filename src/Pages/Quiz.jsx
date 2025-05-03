import React, { useState } from "react";
import { Button, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import questions from "../data/questions";
import { useNavigate } from "react-router";

function Quiz() {
  const [cQuestion, setCQuestion] = useState(0);
  const [correct,setCorrect] =useState(0)
  const [score,setScore] =useState(0)
  const [incorrect,setIncorrect] = useState(0)
  const navigate = useNavigate()
  

const handleAnswer = (selected) => {
    const isCorrect = selected === questions[cQuestion].answer;

    console.log(isCorrect)
    console.log(selected)
  
    if (isCorrect) {
      setScore(score + 1);
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1); 
    }
  
    console.log(incorrect)
    const next = cQuestion + 1;
  
    if (next < questions.length) {
      setCQuestion(next);
    } else {
      
      navigate('/result', {
        state: {
          score: score + (isCorrect ? 1 : 0),
          totalQuestions: questions.length,
          correct: correct + (isCorrect ? 1 : 0),
          incorrect: incorrect + (isCorrect ? 0 : 1),         },
      });
    }
  };
  const progress = ((cQuestion + 1) / questions.length) * 100;

  
  return (
    <div>
      <Container className="my-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-3">
                  Question{cQuestion + 1} of {questions.length}
                </Card.Title>
                <Card.Text className="fs-5">
                  {questions[cQuestion].question}
                </Card.Text>
                <div className="d-grid gap-2 mt-3">
                  {questions[cQuestion].options.map((option, idx) => (
                    <Button
                      key={idx}
                      variant="outline-primary"
                      size="lg"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
               
                <ProgressBar variant="success" now={progress} label={`${Math.round(progress)}%`} className="mt-4" />
                <div className="mt-4 text-center">
                    <Button variant="primary" onClick={()=>navigate('/')}>Back to Home</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quiz;

