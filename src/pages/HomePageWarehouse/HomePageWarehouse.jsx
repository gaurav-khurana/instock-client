import "./HomePageWarehouse.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import WarehouseCard from "../../components/WarehouseCard/WarehouseCard";

function HomePageWarehouse() {
  // func to do API call to get all warehouses from server here

  return (
    <main className="main">
      <div className="main__content">
        {/* HOME PAGE WAREHOUSE */}

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

        {/* HAVE MAP FUNCTION HERE TO RENDER WAREHOUSE CARD */}
        <WarehouseCard />
      </div>
    </main>
  );
}

export default HomePageWarehouse;
