import "./CustomModal.scss";

function CustomModal() {
  return (
    <div className="modal">
      <p className="modal__text"> X </p>

      <div className="modal__text-container">
        <h2 className="modal__heading">Delete Washington warehouse?</h2>
        <p className="modal__text">
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
      </div>

      <div className="modal__icon-container">
        <a className="modal__icon modal__icon--cancel" href="">
          CANCEL
        </a>
        <a className="modal__icon modal__icon--delete" href="">
          DELETE
        </a>
      </div>
    </div>
  );
}

export default CustomModal;
