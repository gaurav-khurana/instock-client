import "./WarehouseEdit.scss";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import WarehouseDetailsCard from "../../Components/WarehouseDetailsCard/WarehouseDetailsCard";
import WarehouseContactsCard from "../../Components/WarehouseContactsCard/WarehouseContactsCard";

function WarehouseEdit() {
  return (
    <>
      <main className="warehouse-edit-main">
        <div className="warehouse-edit-main__content">
          <article className="warehouse-edit-header">
            <div className="warehouse-edit__name-container">
              <Link>
                <img
                  className="warehouse-edit__image"
                  src={BackArrow}
                  alt="Back Arrow"
                />
              </Link>

              <h1 className="warehouse-edit__title">Edit Warehouse</h1>
            </div>
          </article>
          <WarehouseDetailsCard />
          <WarehouseContactsCard />
        </div>
      </main>
    </>
  );
}

export default WarehouseEdit;
