import "./HomePageWarehouse.scss";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import WarehouseCard from "../../components/WarehouseCard/WarehouseCard";

function HomePageWarehouse() {
  // func to do API call to get all warehouses from server here

  return (
    <main className="main">
      {/* <div>HomePageWarehouse</div> */}

      {/* HOME PAGE WAREHOUSE */}

      <article className="header">
        <h1 className="header__title">Warehouses</h1>
        {/* <div>
          <input type="text" id="searchBar" placeholder="Search..." />
          <img src="" alt="" />
        </div> */}
        <SearchBar />

        <a href="">
          {" "}
          {/* remove a & move to link */}
          <Link>
            <button className="header__button">+ Add New Address</button>
          </Link>
        </a>
      </article>

      {/* HAVE MAP FUNCTION HERE TO RENDER WAREHOUSE CARD */}
      <WarehouseCard />
      {/* <section>
        <article className="warehouse-address-container">
          <div className="warehouse-container">
            <h3 className="warehouse__title">Warehouse</h3>

            <img
              className="warehouse__icon warehouse__icon--mobile"
              src=""
              alt=""
            />

            <p>Manhattan</p>

            <img src="" alt="" />
          </div>
          <div className="address-container">
            <h3>Address</h3>

            <img className="default hide-mobile" src="" alt="" />

            <p>503 Broadway, New York, USA</p>
          </div>
        </article>

        <article className="name+info">
          <div>
            <h3>contact name</h3>

            <img className="default hide-mobile" src="" alt="" />

            <p>Parmin Aujla</p>
          </div>

          <div>
            <h3>Contact Information</h3>

            <img className="default hide-mobile" src="" alt="" />

            <p>+1 (629) 555-0129</p>

            <p>paujla@instock.com</p>
          </div>
        </article> 

        <IconsContainer />
        {/* <div className="icons-container">
          <img className="icons__edit" src="" alt="" />

          <img className="icons__delete" src="" alt="" />
        </div> */}
      {/* </section> */}
    </main>
  );
}

export default HomePageWarehouse;
