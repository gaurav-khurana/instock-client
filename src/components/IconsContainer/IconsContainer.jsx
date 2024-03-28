import "./IconsContainer.scss";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import { Link } from "react-router-dom";

function IconsContainer() {
  return (
    <div className="icons">
      <h3 className="icons__title--mobile">ACTIONS</h3>
      <div className="icons-container">
        <Link>
          <img className="icons__delete" src={DeleteIcon} alt="Delete Icon" />
        </Link>
        <Link>
          <img className="icons__edit" src={EditIcon} alt="Edit Icon" />
        </Link>
      </div>
    </div>
  );
}

export default IconsContainer;
