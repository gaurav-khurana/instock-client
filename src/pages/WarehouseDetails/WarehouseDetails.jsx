import "./WarehouseDetails.scss";
import { Link, useParams } from "react-router-dom";
import EditIcon from "../../assets/Icons/edit-white-24dp.svg";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import InventoryCard from "../../Components/InventoryCard/InventoryCard";
import { useEffect, useState } from "react";
import axios from "axios";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function WarehouseDetails() {
  // state to get & set data
  const [singleWarehouse, setSingleWarehouse] = useState({});
  const [allInventoriesForThatWarehouse, setallInventoriesForThatWarehouse] =
    useState([]);

  // get params
  const warehouseId = useParams();
  console.log(typeof warehouseId);
  console.log(warehouseId);
  console.log(warehouseId.id);

  // useEffect func to get single warehouse & all inventories for it
  useEffect(() => {
    try {
      // func to single warehouse & set state

      async function getSingleWarehouse() {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId.id}`
        );
        console.log(response.data);
        setSingleWarehouse(response.data);
      }

      getSingleWarehouse();

      // func to all inventories for that single warehouse & set state

      async function getallInventoriesForThatWarehouse() {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId.id}/inventories`
        );

        console.log(response.data);
        setallInventoriesForThatWarehouse(response.data);
      }
      getallInventoriesForThatWarehouse();
    } catch (error) {
      console.log("Cant get Single warehouse & its inventories", error);
    }
  }, [setSingleWarehouse, setallInventoriesForThatWarehouse, warehouseId.id]);
  console.log("single warehouse ", singleWarehouse);
  console.log("all inventories ", allInventoriesForThatWarehouse);

  return (
    singleWarehouse &&
    allInventoriesForThatWarehouse && (
      <>
        <main className="warehouse-details-main">
          <div className="warehouse-details-main__content">
            <article className="warehouse-details-header">
              <div className="warehouse-details__name-container">
                <Link to={"/"}>
                  <img
                    className="warehouse-details__image"
                    src={BackArrow}
                    alt="Back Arrow"
                  />
                </Link>

                <h1 className="warehouse-details__title">
                  {singleWarehouse.warehouse_name}
                </h1>
              </div>

              {/* path here to edit warehouse page */}
              <Link
                to={"/editwarehouse"}
                state={{ singleWarehouse: singleWarehouse }}
              >
                <div className="warehouse-details__icon-container">
                  <img
                    className="warehouse-details__icon"
                    src={EditIcon}
                    alt="Edit Icon"
                  />

                  <p className="warehouse-details__text">Edit</p>
                </div>
              </Link>
            </article>

            <section className="warehouse-details">
              <div className="warehouse-address">
                <h3 className="warehouse-address__title"> WAREHOUSE ADDRESS</h3>

                <p className="warehouse-address__text">
                  {singleWarehouse.address},<br />
                  {singleWarehouse.city},{singleWarehouse.country}
                </p>
              </div>

              <article className="warehouse-name-info-container">
                <div className="warehouse-contact-name">
                  <div className="warehouse-contact-name-container">
                    <h3 className="warehouse-contact-name__title">
                      CONTACT NAME
                    </h3>
                  </div>

                  <p className="warehouse-contact-name__text">
                    {singleWarehouse.contact_name}
                  </p>

                  <p className="warehouse-contact-name__text--position">
                    {singleWarehouse.contact_position}
                  </p>
                </div>

                <div className="warehouse-info">
                  <div className="warehouse-info-container">
                    <h3 className="warehouse-info__title">
                      CONTACT INFORMATION
                    </h3>
                  </div>

                  <p className="warehouse-info__text">
                    {singleWarehouse.contact_phone}
                  </p>

                  <p className="warehouse-info__text">
                    {singleWarehouse.contact_email}
                  </p>
                </div>
              </article>
            </section>

            {/* static header for inventory list for tablet & desktop */}
            <article className="whd-inventory-card-header--tablet">
              <div className="inventory__title-container inventory__title--tablet">
                <h3 className="inventory__title">INVENTORY ITEM</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <div className="category-container inventory__title--tablet">
                <h3 className="category__title">CATEGORY</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <div className="status-container inventory__title--tablet">
                <h3 className="status__title">STATUS</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <div className="QTY-container inventory__title--tablet">
                <h3 className="QTY__title">QTY</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <h3 className="icons__title--mobile warehouse__title--tablet">
                ACTIONS
              </h3>
            </article>

            <section className="inventory-container">
              {allInventoriesForThatWarehouse?.map((inventory) => (
                <InventoryCard key={inventory.id} inventory={inventory} />
              ))}
            </section>
          </div>
        </main>
      </>
    )
  );
}

export default WarehouseDetails;
