import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import HomePageWarehouse from "./pages/HomePageWarehouse/HomePageWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";
import InventoryCard from "./Components/InventoryCard/InventoryCard";
import Footer from "./Components/Footer/Footer";

import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>    
          {/* <Route path="/InventoryDetails" element={<InventoryDetails />} /> */}
          <Route path="/" element={<HomePageWarehouse />} />

          <Route path="/warehousesdetails" element={<WarehouseDetails />} />

          <Route
            path="/warehouses/:id/inventories"
            element={<WarehouseDetails />}
          
          />
          
          <Route path="/editwarehouse" element={<WarehouseEdit />} />
          
          <Route path="/inventory" element={<InventoryListPage />} />

          <Route path="/inventories/:inventoryId" element={<InventoryDetails />} />
          


          {/* <Route path="/InventoryDetails" element={<InventoryDetails />} /> */}
          {/* <Route path="/InventoryDetails/:inventoryId" element={<InventoryDetails />} /> */}
          

          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
