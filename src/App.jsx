import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import HomePageWarehouse from "./pages/HomePageWarehouse/HomePageWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageWarehouse />} />

          <Route path="/InventoryDetails" element={<InventoryDetails />} />

          <Route path="/warehousesdetails" element={<WarehouseDetails />} />

          <Route
            path="/warehouses/:id/inventories"
            element={<WarehouseDetails />}
          />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/editwarehouse" element={<WarehouseEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
