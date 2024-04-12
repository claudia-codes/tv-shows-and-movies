import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
interface Props {
  error: {
    title?: string;
    message?: string;
  };
}
const ErrorModal: React.FunctionComponent<Props> = ({ error }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{error.title || "Error"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{error.message || "Something went wrong"}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ErrorModal;
