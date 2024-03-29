import "./WarehouseDetails.scss";
import { Link, Navigate, useParams } from "react-router-dom";
import EditIcon from "../../assets/Icons/edit-white-24dp.svg";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import InventoryCard from "../../Components/InventoryCard/InventoryCard";
import { useEffect, useState } from "react";
import axios from "axios";

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
          // `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId}`
          `http://localhost:8080/warehouses/${warehouseId.id}`
          // `http://localhost:8080/warehouses/1`
        );
        console.log(response.data);
        setSingleWarehouse(response.data);
      }

      getSingleWarehouse();

      // func to all inventories for that single warehouse & set state

      async function getallInventoriesForThatWarehouse() {
        const response = await axios.get(
          // `${process.env.REACT_APP_BASE_URL}/warehouses/${warehouseId}`
          `http://localhost:8080/warehouses/${warehouseId.id}/inventories`
          // `http://localhost:8080/warehouses/1/inventories`
        );

        console.log(response.data);
        setallInventoriesForThatWarehouse(response.data);
      }
      getallInventoriesForThatWarehouse();
    } catch (error) {
      console.log("Cant get Single warehouse & its inventories", error);
    }
  }, [setSingleWarehouse, setallInventoriesForThatWarehouse]);
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
                  {/* Washington */}
                  {singleWarehouse.warehouse_name}
                  {/* Washington {warehouse} */}
                </h1>
              </div>

              {/* path here to edit warehouse page */}
              <Link
                to={"/editwarehouse"}
                state={{ singleWarehouse: singleWarehouse }}
              >
                {/* <Navigate to={"/editwarehouse" state: {singleWarehouse}}> */}
                <div className="warehouse-details__icon-container">
                  <img
                    className="warehouse-details__icon"
                    src={EditIcon}
                    alt="Edit Icon"
                  />

                  <p className="warehouse-details__text">Edit</p>
                </div>
                {/* </Navigate> */}
              </Link>

              {/* <Link>
              {" "}
              add path to link
              <button className="warehouse-header__button">
                + Add New Address
              </button>
            </Link> */}
            </article>

            <section className="warehouse-details">
              {/* needs warehouse data to read data */}
              {/* <WarehouseCard /> */}

              <div className="warehouse-address">
                {/* <div className="warehouse-address-container"> */}
                <h3 className="warehouse-address__title"> WAREHOUSE ADDRESS</h3>

                {/* </div> */}

                <p className="warehouse-address__text">
                  {/* 503 Broadway, New York, USA */}
                  {singleWarehouse.address}, {singleWarehouse.city},
                  {singleWarehouse.country}
                </p>
                {/* <p className="warehouse-address__text">
                  {warehouse.address},{warehouse.city},{warehouse.country}
                </p> */}
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
                  {/* <p className="warehouse-contact-name__text">Parmin Aujla</p> */}
                  {/* <p className="warehouse-contact-name__text">{warehouse.contact_name}</p> */}

                  <p className="warehouse-contact-name__text--position">
                    {/* Warehouse Manager */}
                    {singleWarehouse.contact_position}
                  </p>
                  {/* <p className="warehouse-contact-name__text--position">{warehouse.contact_position}</p> */}
                </div>

                <div className="warehouse-info">
                  <div className="warehouse-info-container">
                    <h3 className="warehouse-info__title">
                      CONTACT INFORMATION
                    </h3>
                  </div>

                  {/* <p className="warehouse-info__text">+1 (629) 555-0129</p> */}
                  <p className="warehouse-info__text">
                    {singleWarehouse.contact_phone}
                  </p>
                  {/* <p className="warehouse-info__text">{warehouse.contact_phone}</p> */}

                  {/* <p className="warehouse-info__text">paujla@instock.com</p> */}
                  <p className="warehouse-info__text">
                    {singleWarehouse.contact_email}
                  </p>
                  {/* <p className="warehouse-info__text">{warehouse.contact_email}</p> */}
                </div>
              </article>
            </section>

            <section>
              {/* Inventory Items in this warehouse */}
              {/* map inventories for this */}
              {allInventoriesForThatWarehouse?.map((inventory) => (
                <InventoryCard key={inventory.id} inventory={inventory} />
              ))}
              {/* <InventoryCard /> */}
            </section>
          </div>
        </main>
      </>
    )
  );
}

export default WarehouseDetails;
