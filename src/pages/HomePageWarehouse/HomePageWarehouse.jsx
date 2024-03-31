import "./HomePageWarehouse.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import WarehouseCard from "../../Components/WarehouseCard/WarehouseCard";
import { useEffect, useState } from "react";
import axios from "axios";
import SortIcon from "../../assets/Icons/sort-24px.svg";

function HomePageWarehouse() {
  // state to get all warehouses
  const [allwarehouses, setAllWarehouses] = useState([]);

  // useEffect to do axios call to Get All warehouses
  useEffect(() => {
    try {
      async function getAllWarehouses() {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/warehouses`
        );

        setAllWarehouses(response.data);
      }

      getAllWarehouses();
    } catch (error) {
      console.log(`Can't get all warehouses`, error);
    }
  }, [setAllWarehouses]);

  return (
    allwarehouses && (
      <main className="main">
        <div className="main__content">
          <article className="warehouse-header">
            <h1 className="warehouse-header__title">Warehouses</h1>

            <SearchBar />

            {/* add path to link */}
            <Link>
              <button className="warehouse-header__button">
                + Add New Address
              </button>
            </Link>
          </article>

          {/* static header for warehouse list for tablet & desktop */}
          <article className="warehouse-card-header--tablet">
            <div className="warehouse__title-container warehouse__title--tablet">
              <h3 className="warehouse__title">WAREHOUSE</h3>
              <img
                className="warehouse__icon warehouse__icon--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <div className="address-container warehouse__title--tablet">
              <h3 className="address__title address__title--tablet">ADDRESS</h3>

              <img
                className="warehouse__icon warehouse__icon--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <div className="contact-name-container warehouse__title--tablet">
              <h3 className="contact-name__title contact-name__title--tablet">
                CONTACT NAME
              </h3>
              <img
                className="contact-name__image contact-name__image--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <div className="info-container warehouse__title--tablet">
              <h3 className="info__title">CONTACT INFORMATION</h3>
              <img
                className="info__image info__image--mobile"
                src={SortIcon}
                alt="Sort Icon"
              />
            </div>

            <h3 className="icons__title--mobile warehouse__title--tablet">
              ACTIONS
            </h3>
          </article>

          {allwarehouses.map((warehouse) => (
            <WarehouseCard key={warehouse.id} warehouse={warehouse} />
          ))}
        </div>
      </main>
    )
  );
}

export default HomePageWarehouse;
