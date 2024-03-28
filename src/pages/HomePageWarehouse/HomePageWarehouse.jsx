import "./HomePageWarehouse.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import WarehouseCard from "../../components/WarehouseCard/WarehouseCard";
import { useEffect, useState } from "react";
import axios from "axios";

function HomePageWarehouse() {
  // func to do API call to get all warehouses from server here

  // state to get all warehouses
  const [allwarehouses, setAllWarehouses] = useState([]);

  // useEffect to do axios call to Get All warehouses
  useEffect(() => {
    try {
      async function getAllWarehouses() {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses`
          // `http://localhost:8080/warehouses`
        );
        console.log(response.data);
        setAllWarehouses(response.data);
      }

      getAllWarehouses();
    } catch (error) {
      console.log(`Can't get all warehouses`, error);
    }
  }, [setAllWarehouses]);

  return (
    <main className="main">
      <div className="main__content">
        <article className="warehouse-header">
          <h1 className="warehouse-header__title">Warehouses</h1>

          <SearchBar />

          <Link>
            {" "}
            {/* add path to link */}
            <button className="warehouse-header__button">
              + Add New Address
            </button>
          </Link>
        </article>

        {/* HAVE MAP FUNCTION HERE TO RENDER WAREHOUSE CARD WORKS */}
        {allwarehouses.map((warehouse) => (
          <WarehouseCard key={warehouse.id} warehouse={warehouse} />
        ))}
        {/* <WarehouseCard /> */}
      </div>
    </main>
  );
}

export default HomePageWarehouse;
