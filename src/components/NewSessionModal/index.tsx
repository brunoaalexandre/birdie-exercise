import Modal from "react-modal";

interface NewSessionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewSessionModal({
  isOpen,
  onRequestClose,
}: NewSessionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <h1>Olá</h1>
    </Modal>
  );
}
