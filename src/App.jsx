import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/Header/HeaderComponent";
import CharacterCard from "./components/Card/CharacterCard";
import FormComponent from "./components/Form/FormComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { initialCharacters } from "./data/characters";

function App() {
  
  const [characters, setCharacters] = useState(initialCharacters);
  const [editCharacter, setEditCharacter] = useState(null);

  const handleCreate = (payload) => {
    setCharacters((prev) => {
      return [...prev, payload];
    });
  };
  const handleDelete = (id) => {
    setCharacters((currentCharacters) => {
      return currentCharacters.filter((character) => character.id !== id);
    });
  }
  const handleUpdate = (updatedCharacter) => {
    setCharacters((currentCharacters) => {
      return currentCharacters.map((character) =>
        character.id === updatedCharacter.id ? updatedCharacter : character
      );
    });
    setEditCharacter(null);
  };

  const characterItems = characters.map((c) => (
    <Col key={c.id} lg={4} className="card-col">
      <CharacterCard character={c} onDelete={handleDelete} onEdit={setEditCharacter}></CharacterCard>
    </Col>
  ));

  return (
    <div className="main-block">
      <HeaderComponent />
      <Container>
        <Container className="character-block">
          <FormComponent
            editCharacter={editCharacter}
            onCreate={handleCreate}
            onUpdate={handleUpdate}
          />
        </Container>
        <Container className="character-block">
          <Row className="justify-content-md-center">{characterItems}</Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;
