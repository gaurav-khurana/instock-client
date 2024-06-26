import "./WarehouseCard.scss";
import IconsContainer from "../IconsContainer/IconsContainer";
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";

function WarehouseCard({ warehouse }) {
  return (
    <section className="warehouse">
      <section className="warehouse-card">
        <article className="warehouse-address-container">
          <div className="warehouse-container">
            <div className="warehouse__title-container warehouse__title-container--tablet ">
              <h3 className="warehouse__title">WAREHOUSE</h3>

              <img
                className="warehouse__icon warehouse__icon--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <Link to={`/warehouses/${warehouse.id}/inventories`}>
              <div className="warehouse-name-container">
                <p className="warehouse-name__title-name">
                  {warehouse.warehouse_name}
                </p>

                <img
                  className="warehouse-name__image"
                  src={ChevronIcon}
                  alt="Chevron Icon"
                />
              </div>
            </Link>
          </div>
          <div className="address">
            <div className="address-container address-container--tablet ">
              <h3 className="address__title">ADDRESS</h3>

              <img
                className="warehouse__icon warehouse__icon--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <p className="address__text">
              {warehouse.address},<br />
              {warehouse.city},{warehouse.country}
            </p>
          </div>
        </article>

        <article className="name-info-container">
          <div className="contact-name">
            <div className="contact-name-container contact-name-container--tablet ">
              <h3 className="contact-name__title">CONTACT NAME</h3>
              <img
                className="contact-name__image contact-name__image--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <p className="contact-name__text">{warehouse.contact_name}</p>
          </div>

          <div className="info">
            <div className="info-container info-container--tablet ">
              <h3 className="info__title">CONTACT INFORMATION</h3>
              <img
                className="info__image info__image--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <p className="info__text">{warehouse.contact_phone}</p>

            <p className="info__text">{warehouse.contact_email}</p>
          </div>
        </article>
      </section>

      <IconsContainer
        warehouseId={warehouse.id}
        warehouseName={warehouse.warehouse_name}
      />
    </section>
  );
}

export default WarehouseCard;
