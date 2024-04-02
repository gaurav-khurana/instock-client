import "./WarehouseEdit.scss";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import { Link, useParams } from "react-router-dom";
import WarehouseDetailsCard from "../../Components/WarehouseDetailsCard/WarehouseDetailsCard";
import WarehouseContactsCard from "../../Components/WarehouseContactsCard/WarehouseContactsCard";
import { useEffect, useState } from "react";
import axios from "axios";

function WarehouseEdit() {
  // get state from global location obj in window

  const [singleWarehouse, setSingleWarehouse] = useState({});

  // get params
  const warehouseId = useParams();
  console.log(typeof warehouseId);
  console.log(warehouseId);
  console.log(warehouseId.warehouseId);

  // useEffect func to get single warehouse & all inventories for it
  useEffect(() => {
    try {
      // func to single warehouse & set state

      async function getSingleWarehouse() {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId.warehouseId}`
        );
        console.log(response.data);
        setSingleWarehouse(response.data);
      }

      getSingleWarehouse();
    } catch (error) {
      console.log("Cant get Single warehouse & its data", error);
    }
  }, [setSingleWarehouse, warehouseId.id]);
  console.log("single warehouse ", singleWarehouse);

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
          <WarehouseDetailsCard singleWarehouse={singleWarehouse} />

          <WarehouseContactsCard singleWarehouse={singleWarehouse} />
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
