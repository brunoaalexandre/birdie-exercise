import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { Form, Button } from "react-bootstrap";

const { Select, Label } = Form;

interface SessionData {
  name: string;
  email: string;
  phone: string;
  city: string;
  neighborhood: string;
  street: string;
  number: number;
  complement: string;
}

interface NewSessionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  sessionInput: SessionData;
  calendar: string[];
}

export function NewSessionModal({
  isOpen,
  onRequestClose,
  sessionInput,
  calendar,
}: NewSessionModalProps) {
  // const [days, setDays] = useState([]);
  // const [currentDay, setCurrentDay] = useState<any>();
  const currentDay = useRef<any>();
  const currentHourDate = useRef<any>();
  const [hours, setHours] = useState<any | null>([]);

  const days = Object.entries(calendar);

  async function handleCreateSession() {
    const sessionData = {
      ...sessionInput,
      date_time: `${currentDay.current}T${currentHourDate.current}:00.00+03:00`
    }

    await axios.post("https://interview.piperz.com.br/api/sessions", sessionData);
    onRequestClose();
  }

  function selectHour(date: string) {
    const currentHour = days.find((day) => day[0] === date);
    setHours(currentHour);
  }

  function transformDate(date: string) {
    return date.split("-").reverse().join("/");
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Form>
        <Label>Escolha a melhor data para você:</Label>
        <Select
          onChange={(e) => {
            currentDay.current = e.target.value;
            selectHour(currentDay.current);
          }}
        >
          <option value="" selected>
            Choose here
          </option>
          {days.map((day) => (
            <option value={day[0]}>{transformDate(day[0])}</option>
          ))}
        </Select>
        <Label style={{ marginTop: "30px" }}>
          Escolha o melhor horário para você:
        </Label>
        <Select onChange={(e) => {
          currentHourDate.current = e.target.value
        }}>
          {!hours[1] ? (
            <option value="" selected >Selecione um horário</option>
          ) : (
            hours[1].map((hour: any) => <option value={hour}>{hour}</option>)
          )}
        </Select>
      </Form>
      <Button
        variant="primary"
        type="submit"
        onClick={() => handleCreateSession()}
        style={{ marginTop: "30px" }}
      >
        Enviar
      </Button>
    </Modal>
  );
}
