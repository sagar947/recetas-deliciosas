import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faHeart } from '@fortawesome/free-solid-svg-icons';

const Recipe = ({ recipe }) => {
  return (
    <Col xs={6} md={3}>
      <Card className="mt-5">
        <Card.Img variant="top" src={recipe.thumbnail || '/images/logo.png'} alt={recipe.title}></Card.Img>
        <Card.Body>
          <Card.Title>{ recipe.title }</Card.Title>
          <Card.Text>{ recipe.ingredients }</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col xs={6} className="text-center text-primary">
              <FontAwesomeIcon icon={ faFile } size="lg" />
            </Col>
            <Col xs={6} className="text-center text-primary">
              <FontAwesomeIcon icon={ faHeart } size="lg" />
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  )
}

export default Recipe;
