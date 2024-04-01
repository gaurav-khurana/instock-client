import "./WarehouseEdit.scss";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useLocation } from "react-router-dom";
import WarehouseDetailsCard from "../../Components/WarehouseDetailsCard/WarehouseDetailsCard";
import WarehouseContactsCard from "../../Components/WarehouseContactsCard/WarehouseContactsCard";

function WarehouseEdit() {
  // get state from global location obj in window

  const location = useLocation();
  const singlewarehouse = location.state.singleWarehouse;
  console.log(singlewarehouse);
  console.log(singlewarehouse.address);

  return (
    <>
      <main className="warehouse-edit-main">
        <div className="warehouse-edit-main__content">
          <article className="warehouse-edit-header">
            <div className="warehouse-edit__name-container">
              <Link to={"/"}>
                <img
                  className="warehouse-edit__image"
                  src={BackArrow}
                  alt="Back Arrow"
                />
              </Link>

              <h1 className="warehouse-edit__title">Edit Warehouse</h1>
            </div>
          </article>
          <WarehouseDetailsCard singleWarehouse={singlewarehouse} />

          <WarehouseContactsCard singleWarehouse={singlewarehouse} />
          <div className="buttons-container">
            <button className="button" type="button">
              Cancel
            </button>
            <button className="button add-button" type="submit">
              Save
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default WarehouseEdit;
