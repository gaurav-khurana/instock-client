import "./InventoryCard.scss";
import ChevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import SortIcon from "../../assets/Icons/sort-24px.svg";

import { Link } from "react-router-dom";
import IconsContainer from "../IconsContainer/IconsContainer";
// import InventoryDetails from "../../pages/InventoryDetails/InventoryDetails";

function InventoryCard({ inventory }) {
  return (
    <>
      <section className="inventory">
        <section className="inventory-card inventory-card--whd">
          <article className="inventory-category-container inventory-category-container--whd">
            <div className="inventory-container">
              <div className="inventory__title-container inventory__title-container--tablet">
                <h3 className="inventory__title">INVENTORY ITEM</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <Link to={`/inventories/${inventory.id}`}>
                <div className="inventory-name-container">
                  <p className="inventory-name__title-name">
                    {inventory.item_name}
                  </p>

                  <img
                    className="warehouse-name__image"
                    src={ChevronIcon}
                    alt="Chevron Icon"
                  />
                </div>
              </Link>
            </div>

            <div className="category">
              <div className="category-container category-container--tablet">
                <h3 className="category__title">CATEGORY</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <p className="category__text">{inventory.category}</p>
            </div>
          </article>

          <article className="status-QTY-warehouse-container status-QTY-warehouse-container--whd">
            <div className="status">
              <div className="status-container status-container--tablet">
                <h3 className="status__title">STATUS</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              {inventory.status === "In Stock" ? (
                <div className="status__text status__text--green">
                  {inventory.status}
                </div>
              ) : (
                <div className="status__text status__text--red">
                  {inventory.status}
                </div>
              )}
            </div>

            <div className="QTY">
              <div className="QTY-container QTY-container--tablet">
                <h3 className="QTY__title">QTY</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <p className="QTY__text">{inventory.quantity}</p>
            </div>

            <div className="warehouse-inventory">
              <div className="warehouse-inventory-container warehouse-inventory-container--tablet">
                <h3 className="warehouse-inventory__title">WAREHOUSE</h3>

                <img
                  className="inventory__icon inventory__icon--mobile"
                  src={SortIcon}
                  alt="Sort Icon"
                />
              </div>

              <p className="warehouse-inventory__text">
                {inventory.warehouse_name}
              </p>
            </div>
          </article>
        </section>

        <IconsContainer
          inventoryId={inventory.id}
          inventoryName={inventory.item_name}
        />
      </section>
    </>
  );
}

export default InventoryCard;
