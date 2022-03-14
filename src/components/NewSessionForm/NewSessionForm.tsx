import axios from "axios";
import { useState, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import InputMask from "react-input-mask";
import { NewSessionModal } from "../NewSessionModal";

import { Container } from "./styles";

const { Group, Label, Control } = Form;

export function NewSessionForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState(0);
  const [complement, setComplement] = useState("");
  const [isNewSessionModalOpen, setIsNewSessionModalOpen] = useState(false);
  const [calendar, setCalendar] = useState([]);

  const dataSession = {
    name,
    email,
    phone,
    city,
    neighborhood,
    street,
    number,
    complement,
  };

  function handleCloseNewSessionModal() {
    setIsNewSessionModalOpen(false);
  }

  function handleSessionCalendar(event: FormEvent) {
    event.preventDefault();

    setIsNewSessionModalOpen(true);

    axios
      .get(`https://interview.piperz.com.br/api/calendar/${city}`)
      .then((response) => setCalendar(response.data));
  }

  return (
    <Container>
      <h1>Informe todos os dados abaixo </h1>
      <Form onSubmit={handleSessionCalendar}>
        <Group className="mb-3">
          <Label>Nome:</Label>
          <Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Bruno Alexandre"
            required
          />
        </Group>

        <Group>
          <Label>Email:</Label>
          <Control
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="nome@contato.com.br"
            required
          />
        </Group>

        <Group className="mb-3">
          <Label>Telefone:</Label>
          <InputMask
            className="form-control"
            mask="(99) 99999-9999"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="(99) 99999-9999"
            required
          />
        </Group>

        <Group className="mb-3">
          <Label>Cidade:</Label>
          <Control
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Porto Alegre"
            required
          />
        </Group>

        <Group className="mb-3">
          <Label>Bairro:</Label>
          <Control
            type="text"
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
            placeholder="Centro"
            required
          />
        </Group>

        <Group className="mb-3">
          <Label>Endereço:</Label>
          <Control
            type="text"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            placeholder="Av. São Miguel"
            required
          />
        </Group>

        <Group className="mb-3">
          <Label>Número:</Label>
          <Control
            type="number"
            value={number}
            onChange={(event) => setNumber(Number(event.target.value))}
            placeholder="1001"
            required
          />
        </Group>

        <Group className="mb-3">
          <Label>Complemento:</Label>
          <Control
            type="text"
            value={complement}
            onChange={(event) => setComplement(event.target.value)}
            placeholder="Casa 2"
            required
          />
        </Group>

        <Button variant="primary" type="submit">
          Continuar
        </Button>
      </Form>
      <NewSessionModal
        isOpen={isNewSessionModalOpen}
        onRequestClose={handleCloseNewSessionModal}
        sessionInput={dataSession}
        calendar={calendar}
      />
    </Container>
  );
}
