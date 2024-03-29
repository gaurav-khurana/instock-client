import "./IconsContainer.scss";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import { Link } from "react-router-dom";
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

function IconsContainer({ warehouseId, warehouseName }) {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="icons">
      <h3 className="icons__title--mobile">ACTIONS</h3>
      <div className="icons-container">
        <img
          onClick={openModal}
          className="icons__delete"
          src={DeleteIcon}
          alt="Delete Icon"
        />

        <Link>
          <img className="icons__edit" src={EditIcon} alt="Edit Icon" />
        </Link>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {/* <div>
            <h1>Yo</h1><span>Do you want to delete</span>
          </div> */}

          <CustomModal
            onRequestClose={closeModal}
            warehouseId={warehouseId}
            warehouseName={warehouseName}
          />
        </Modal>
      </div>
    </div>
  );
}

export default IconsContainer;
