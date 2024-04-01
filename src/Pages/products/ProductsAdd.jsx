
const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <p>Aquí va el contenido del modal...</p>
        </div>
      </div>
    )
  );
};

export default Modal;