import "./InventoryCard.scss";
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

import { Link } from "react-router-dom";
import IconsContainer from "../IconsContainer/IconsContainer";
import InventoryDetails from "../../pages/InventoryDetails/InventoryDetails";

function InventoryCard({ inventory }) {
  return (
    <div>
      {/* InventoryCard */}

      <section className="inventory">
        <section className="inventory-card">
          <article className="inventory-category-container">
            <div className="inventory-container">
              <div className="inventory__title-container">
                <h3 className="inventory__title">INVENTORY ITEM</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              {/* link path INCORRECT - probably line 29 correct; goes to Single item in Inventory */}
              {/* <Link to={`/warehousesdetails`} warehouse={warehouse}> */}
              <Link to="/InventoryDetails/:inventoryId">
              {/* <Link to={`/inventories/:id`}> */}
                <div className="inventory-name-container">
                  <p className="inventory-name__title-name">
                    {inventory.item_name}
                  </p>
                  {/* <p className="inventory-name__title-name">Television</p> */}
                  {/* <p className="inventory-name__title-name">
                  {warehouse.warehouse_name}
                </p> */}

                  <img
                    className="warehouse-name__image"
                    src={ChevronIcon}
                    alt="Chevron Icon"
                  />
                </div>
              </Link>
            </div>

            <div className="category">
              <div className="category-container">
                <h3 className="category__title">CATEGORY</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>
              {/* <img className="default hide-mobile" src="" alt="" /> */}

              <p className="category__text">{inventory.category}</p>
              {/* <p className="category__text">Electronics</p> */}
              {/* <p className="category__text">
              {warehouse.address},{warehouse.city},{warehouse.country}
            </p> */}
            </div>
          </article>

          <article className="status-QTY-container">
            <div className="status">
              <div className="status-container">
                <h3 className="status__title">STATUS</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>
              {/* use ternary operator to in-stock ? 'status__text--green' : 'status__text--red */}
              {inventory.status === "In Stock" ? (
                <div className="status__text status__text--green">
                  {inventory.status}
                </div>
              ) : (
                <div className="status__text status__text--red">
                  {inventory.status}
                </div>
              )}

              {/* <div className="status__text status__text--green">
                {inventory.status}
              </div> */}
              {/* <div className="status__text status__text--green">In Stock</div> */}
              {/* <div className="status__text status__text--red">Out of Stock</div> */}
              {/* <p className="status__text">Parmin Aujla</p> */}
              {/* <p className="status__text">{warehouse.contact_name}</p> */}
            </div>

            <div className="QTY">
              <div className="QTY-container">
                <h3 className="QTY__title">QTY</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <p className="QTY__text">{inventory.quantity}</p>
              {/* <p className="QTY__text">500</p> */}
              {/* <p className="QTY__text">{warehouse.contact_phone}</p> */}
            </div>
          </article>
        </section>

        <IconsContainer />
      </section>
    </div>
  );
}

export default InventoryCard;
