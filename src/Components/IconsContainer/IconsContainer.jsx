import "./IconsContainer.scss";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-modal";
import CustomModal from "../CustomModal/CustomModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function IconsContainer({
  warehouseId,
  warehouseName,
  inventoryId,
  inventoryName,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handlePath() {
    if (warehouseId !== undefined || warehouseId !== null) {
      navigate(`/editwarehouse/${warehouseId}`);
    } else {
      navigate(`/editInventoryItem/${inventoryId}`);
    }
  }

  return (
    <div className="icons">
      <h3 className="icons__title--mobile icons__title--tablet ">ACTIONS</h3>
      <div className="icons-container">
        <img
          onClick={openModal}
          className="icons__delete"
          src={DeleteIcon}
          alt="Delete Icon"
        />

        {/* <Link>
          <img className="icons__edit" src={EditIcon} alt="Edit Icon" />
        </Link> */}

        {/* {warehouseId !== undefined ? (
          <Link to={`/editwarehouse/${warehouseId}`} />
        ) : (
          <Link to={`/editInventoryItem/${inventoryId}`} />
        )} */}
        {/* <Link to={`/editInventoryItem/${inventoryId}`}/> */}
        <img
          onClick={handlePath}
          className="icons__edit"
          src={EditIcon}
          alt="Edit Icon"
        />
        {/* </Link> */}

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <CustomModal
            onRequestClose={closeModal}
            warehouseId={warehouseId}
            warehouseName={warehouseName}
            inventoryId={inventoryId}
            inventoryName={inventoryName}
          />
        </Modal>
      </div>
    </div>
  );
}

export default IconsContainer;
