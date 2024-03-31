import "./InventoryListPage.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InventoryCard from "../../Components/InventoryCard/InventoryCard";
import SearchBar from "../../Components/SearchBar/SearchBar";

function InventoryListPage() {
  // state to get & set data
  const [allInventories, setallInventories] = useState([]);

  // useEffect func to get all inventories
  useEffect(() => {
    try {
      async function getallInventories() {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/inventories`
          // `http://localhost:8080/inventories`
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
      {/* InventoryListPage */}

      <main className="inventory-main">
        <div className="inventory-main__content">
          <article className="inventory-header">
            <h1 className="inventory-header__title">Inventory</h1>

            <SearchBar />

            {/* add path to link */}
            <Link to="/addInventoryItem">
              <button className="inventory-header__button">
                + Add New Item
              </button>
            </Link>
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
