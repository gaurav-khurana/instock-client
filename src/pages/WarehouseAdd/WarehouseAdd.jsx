import "./WarehouseAdd.scss";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import WarehouseDetailsAdd from "../../Components/WarehouseDetailsAdd/WarehouseDetailsAdd";
import WarehouseContactsAdd from "../../Components/WarehouseContactsAdd/WarehouseContactsAdd";

function WarehouseAdd() {
  return (
    <>
      <main className="warehouse-add-main">
        <div className="warehouse-add-main__content">
          <article className="warehouse-add-header">
            <div className="warehouse-add__name-container">
              <Link to={"/"}>
                <img
                  className="warehouse-add__image"
                  src={BackArrow}
                  alt="Back Arrow"
                />
              </Link>

              <h1 className="warehouse-add__title">Add Warehouse</h1>
            </div>
          </article>
          <WarehouseDetailsAdd />
          <WarehouseContactsAdd />
          <div className="buttons-container">
            <button className="button" type="button">
              Cancel
            </button>
            <button className="button add-button" type="submit">
              Add Warehouse
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default WarehouseAdd;
