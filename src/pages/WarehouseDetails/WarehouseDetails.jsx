import "./WarehouseDetails.scss";
import { Link } from "react-router-dom";
import EditIcon from "../../assets/Icons/edit-white-24dp.svg";
import BackArrow from "../../assets/Icons/arrow_back-24px.svg";
import InventoryCard from "../../Components/InventoryCard/InventoryCard";

// function WarehouseDetails({ warehouse }) {
function WarehouseDetails() {
  return (
    <>
      <main className="warehouse-details-main">
        <div className="warehouse-details-main__content">
          <article className="warehouse-details-header">
            <div className="warehouse-details__name-container">
              <Link>
                <img
                  className="warehouse-details__image"
                  src={BackArrow}
                  alt="Back Arrow"
                />
              </Link>

              <h1 className="warehouse-details__title">
                Washington
                {/* Washington {warehouse} */}
              </h1>
            </div>

            {/* path here to edit warehouse page */}
            <Link to={"/editwarehouse"}>
              <div className="warehouse-details__icon-container">
                <img
                  className="warehouse-details__icon"
                  src={EditIcon}
                  alt="Edit Icon"
                />

                <p className="warehouse-details__text">Edit</p>
              </div>
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
                503 Broadway, New York, USA
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

                <p className="warehouse-contact-name__text">Parmin Aujla</p>
                {/* <p className="warehouse-contact-name__text">{warehouse.contact_name}</p> */}

                <p className="warehouse-contact-name__text--position">
                  Warehouse Manager
                </p>
                {/* <p className="warehouse-contact-name__text--position">{warehouse.contact_position}</p> */}
              </div>

              <div className="warehouse-info">
                <div className="warehouse-info-container">
                  <h3 className="warehouse-info__title">CONTACT INFORMATION</h3>
                </div>

                <p className="warehouse-info__text">+1 (629) 555-0129</p>
                {/* <p className="warehouse-info__text">{warehouse.contact_phone}</p> */}

                <p className="warehouse-info__text">paujla@instock.com</p>
                {/* <p className="warehouse-info__text">{warehouse.contact_email}</p> */}
              </div>
            </article>
          </section>

          <section>
            {/* Inventory Items in this warehouse */}

            <InventoryCard />
          </section>
        </div>
      </main>
    </>
  );
}

export default WarehouseDetails;
