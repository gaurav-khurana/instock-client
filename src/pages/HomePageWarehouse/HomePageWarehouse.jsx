import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePageWarehouse.scss";

function HomePageWarehouse() {
  // func to do API call to get data from server here

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
            <img src="" alt="" />
          </Link>
        </a>
      </article>

      <section>
        <article className="warehouse+address">
          <div>
            <h3>Warehouse</h3>

            <img className=" default hide-mobile" src="" alt="" />

            <p>Manhattan</p>

            <img src="" alt="" />
          </div>
          <div>
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

        <div>
          <img src="" alt="" />

          <img src="" alt="" />
        </div>
      </section>
    </main>
  );
}

export default HomePageWarehouse;
