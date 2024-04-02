import "./InventoryDetails.scss";
import EditIcon from "../../assets/Icons/edit-white-24dp.svg";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function InventoryDetails() {
  const [inventoryDetails, setInventoryDetails] = useState({});
  const [singleWarehouse, setSingleWarehouse] = useState({});
  const inventoryId = useParams();

  useEffect(() => {
    const getInventoryDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/inventories/${inventoryId.inventoryId}`
        );
        const inventoryData = response.data;

        setInventoryDetails(inventoryData.foundInventory);
      } catch (error) {
        console.error("No Inventory Details for you, my friend: ", error);
      }
    };
    getInventoryDetails();
  }, [setInventoryDetails]);

  const warehouseId = inventoryDetails.warehouse_id;

  useEffect(() => {
    const getSingleWarehouse = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/warehouses/${warehouseId}`
        );

        const warehouseData = response.data;

        setSingleWarehouse(response.data);
      } catch (error) {
        console.log("Cant get Single warehouse & its inventories", error);
      }
    };
    getSingleWarehouse();
  }, [warehouseId]);

  return (
    <>
      <main className="inventory-details-main">
        <div className="inventory-details-main__content">
          <article className="inventory-details-header">
            <div className="inventory-details__name-container">
              <Link to={"/inventory"}>
                <img
                  className="inventory-details__image"
                  src={BackArrow}
                  alt="Back Arrow"
                />
              </Link>

              <h1 className="inventory-details__title">
                {inventoryDetails.item_name}
              </h1>
            </div>

            <Link to={`/editInventoryItem/${inventoryId.inventoryId}`}>
              <div className="inventory-details__icon-container">
                <img
                  className="inventory-details__icon"
                  src={EditIcon}
                  alt="Edit Icon"
                />
                <p className="inventory-details__edit">Edit</p>
              </div>
            </Link>
          </article>

          <section className="inventory-details__section">
            <section className="inventory-category__container">
              <div className="inventory-container">
                <div className="inventory__title--container">
                  <h3 className="inventory__title-details">
                    {" "}
                    ITEM DESCRIPTION:
                  </h3>
                  <p className="category__text">
                    {inventoryDetails.description}
                  </p>
                </div>
              </div>

              <div className="category">
                <div className="category-container">
                  <h3 className="inventory__title-details">CATEGORY:</h3>
                </div>

                <p className="category__text">{inventoryDetails.category}</p>
              </div>
            </section>
            <section className="status-QTY-warehouse__container">
              <article className="status-QTY__container">
                <div className="status">
                  <div className="status-container">
                    <h3 className="inventory__title-details">STATUS:</h3>
                  </div>
                  {inventoryDetails.status === "In Stock" ? (
                    <div className="status__text status__text--green">
                      {inventoryDetails.status}
                    </div>
                  ) : (
                    <div className="status__text status__text--red">
                      {inventoryDetails.status}
                    </div>
                  )}
                </div>
                <div className="QTY">
                  <div className="QTY-container">
                    <h3 className="inventory__title-details">QUANTITY:</h3>
                  </div>

                  <p className="category__text">{inventoryDetails.quantity}</p>
                </div>
              </article>

              <article className="warehouse-inventory-details__container">
                <div className="warehouse-name">
                  <div className="warehouse-name__container">
                    <h3 className="inventory__title-details">WAREHOUSE:</h3>
                  </div>

                  <p className="category__text">
                    {singleWarehouse.warehouse_name}
                  </p>
                </div>
              </article>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

export default InventoryDetails;
