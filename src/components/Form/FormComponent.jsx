import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function FormComponent({ editCharacter, onCreate, onUpdate }) {
  const DEFAULT_VALUES = {
    name: "",
    age: "",
    job: "",
    image: "",
  };

  const [values, setValues] = useState(DEFAULT_VALUES);

  useEffect(() => {
    if (!editCharacter) {
       setValues(DEFAULT_VALUES);
      return;
    }

    setValues(editCharacter);
  }, [editCharacter]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id: editCharacter ? editCharacter.id : uuidv4(),
      name: String(values.name).trim(),
      age: String(values.age).trim(),
      job: String(values.job).trim(),
      image: String(values.image).trim(),
    };
    if (editCharacter) {
      onUpdate(payload);
    } else {
      onCreate(payload);
    }
     setValues(DEFAULT_VALUES);
  };

  const updateField = (field, nextValue) => {
    setValues((prev) => ({ ...prev, [field]: nextValue }));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Col xs={4} className="mb-3" >
          <Form.Control
            placeholder="Name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
        </Col>

        <Col xs={2} className="mb-3">
          <Form.Control
            placeholder="Age"
            value={values.age}
            onChange={(e) => updateField("age", e.target.value)}
          />
        </Col>

        <Col className="mb-3" xs={5}>
          <Form.Control
            placeholder="Job"
            value={values.job}
            onChange={(e) => updateField("job", e.target.value)}
          />
        </Col>
        <Col className="mb-3">
          <Button variant="primary" className="px-2 w-100" type="submit">
            Add
          </Button>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Control placeholder="Image URL" value={values.image} onChange={(e) => updateField("image", e.target.value)} />
      </Form.Group>
    </Form>
  );
}

export default FormComponent;
