import "./InventoryListPage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InventoryCard from "../../Components/InventoryCard/InventoryCard";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function InventoryListPage() {
  // state to get & set data
  const [allInventories, setallInventories] = useState([]);

  // useEffect func to get all inventories
  useEffect(() => {
    try {
      async function getallInventories() {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/inventories`
        );
        console.log(response.data);
        setallInventories(response.data);
      }
      getallInventories();
    } catch (error) {
      console.log("Cant get Single warehouse & its inventories", error);
    }
  }, [setallInventories]);

  return (
    <>
      <main className="inventory-main">
        <div className="inventory-main__content">
          <article className="inventory-header">
            <h1 className="inventory-header__title">Inventory</h1>

            <SearchBar />

            {/* add path to link */}
            <Link>
              <button className="inventory-header__button">
                + Add New Item
              </button>
            </Link>
          </article>

          {/* static header for inventory list for tablet & desktop */}
          <article className="inventory-card-header--tablet">
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

            <div className="warehouse-inventory-container inventory__title--tablet">
              <h3 className="warehouse-inventory__title">WAREHOUSE</h3>

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
            {allInventories?.map((inventory) => (
              <InventoryCard key={inventory.id} inventory={inventory} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default InventoryListPage;
