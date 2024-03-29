// import { useEffect } from "react";
import "./CustomModal.scss";
import axios from "axios";

function CustomModal({
  onRequestClose,
  warehouseId,
  warehouseName,
  inventoryId,
  inventoryName,
}) {
  console.log(warehouseId);
  console.log(warehouseName);
  console.log(inventoryId);
  console.log(inventoryName);

  // func to do delete warehouse
  async function deleteWarehouse() {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId}`
        // `http://localhost:8080/warehouses/${warehouseId}`
      );
      console.log("Warehouse deleted", response.data);
    } catch (error) {
      console.log("Cannot delete Warehouse", error);
    }
  }

  // func to delete inventory

  async function deleteInventory() {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/inventories/${inventoryId}`
        // `http://localhost:8080/inventories/${inventoryId}`
      );
      console.log("Inventory Deleted", response.data);
    } catch (error) {
      console.log("Cannot delete Inventory", error);
    }
  }

  return (
    <div className="modal">
      <p onClick={onRequestClose} className="modal__text">
        X
      </p>

      <div className="modal__text-container">
        {warehouseName !== undefined ? (
          <>
            <h2 className="modal__heading">
              Delete {warehouseName} warehouse ?
            </h2>
            <p className="modal__text">
              Please confirm that you’d like to delete the {warehouseName} from
              the list of warehouses. You won’t be able to undo this action.
            </p>
          </>
        ) : (
          <>
            <h2 className="modal__heading">
              Delete {inventoryName} inventory item ?
            </h2>
            <p className="modal__text">
              Please confirm that you’d like to delete {inventoryName} from the
              inventory list. You won’t be able to undo this action.
            </p>
          </>
        )}
      </div>

      <div className="modal__icon-container">
        {warehouseId !== undefined ? (
          <>
            <a className="modal__icon modal__icon--cancel" href="/">
              Cancel
            </a>
            <a
              onClick={deleteWarehouse}
              className="modal__icon modal__icon--delete"
              href=""
            >
              Delete
            </a>
          </>
        ) : (
          <>
            <a className="modal__icon modal__icon--cancel" href="/inventory">
              Cancel
            </a>
            <a
              onClick={deleteInventory}
              className="modal__icon modal__icon--delete"
              href=""
            >
              Delete
            </a>
          </>
        )}
        {/* <a
          onClick={deleteWarehouse}
          className="modal__icon modal__icon--delete"
          href=""
        >
          Delete
        </a> */}
      </div>
    </div>
  );
}

export default CustomModal;
