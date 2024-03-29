// import { useEffect } from "react";
import "./CustomModal.scss";
import axios from "axios";

function CustomModal({ onRequestClose, warehouseId, warehouseName }) {
  // func to do delete warehouse

  async function deleteWarehouse() {
    try {
      const response = await axios.delete(
        `http://localhost:8080/warehouses/${warehouseId}`
      );
      console.log("Warehouse deleted", response.data);
    } catch (error) {
      console.log("Cannot delete Warehouse", error);
    }
  }

  return (
    <div className="modal">
      <p onClick={onRequestClose} className="modal__text">
        X
      </p>

      <div className="modal__text-container">
        <h2 className="modal__heading">Delete {warehouseName} warehouse?</h2>
        <p className="modal__text">
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
      </div>

      <div className="modal__icon-container">
        <a className="modal__icon modal__icon--cancel" href="/">
          Cancel
        </a>
        <a
          onClick={deleteWarehouse}
          // onClick={() => deleteWarehouse()}
          className="modal__icon modal__icon--delete"
          href=""
        >
          Delete
        </a>
      </div>
    </div>
  );
}

export default CustomModal;
