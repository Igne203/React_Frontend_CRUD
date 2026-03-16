import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CharacterCard({ character, onDelete, onEdit }) {

  return (
    <Card>
      <Card.Body>
        <Card.Title className="card-title">{character.name}</Card.Title>
        <Card.Img
          src={character.image}
          style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "center top" }}
        />
        <div className="card-text">
          <p>name: {character.name}</p>
          <p>age: {character.age}</p>
          <p>job: {character.job}</p>

          <Row className="mt-2">
            <Col sm={6}>
              <Button onClick={() => onEdit(character)} variant="primary" className="px-2 w-100">
                Edit
              </Button>
            </Col>
            <Col sm={6}>
              <Button onClick={() => onDelete(character.id)} variant="danger" className="px-2 w-100">
                Delete
              </Button>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CharacterCard;
