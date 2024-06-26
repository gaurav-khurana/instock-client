import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import HomePageWarehouse from "./pages/HomePageWarehouse/HomePageWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";
import WarehouseAdd from "./pages/WarehouseAdd/WarehouseAdd";
import Footer from "./Components/Footer/Footer";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import AddInventoryItem from "./Components/AddInventoryItem/AddInventoryItem";
import EditInventoryItem from "./Components/EditInventoryItem/EditInventoryItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageWarehouse />} />

          <Route path="/warehousesdetails" element={<WarehouseDetails />} />

          <Route
            path="/warehouses/:id/inventories"
            element={<WarehouseDetails />}
          />
          <Route path="/addwarehouse" element={<WarehouseAdd />} />

          <Route
            path="/editwarehouse/:warehouseId"
            element={<WarehouseEdit />}
          />

          <Route path="/inventory" element={<InventoryListPage />} />

          <Route
            path="/inventories/:inventoryId"
            element={<InventoryDetails />}
          />

          <Route path="/addInventoryItem" element={<AddInventoryItem />} />

          <Route
            path="/editInventoryItem/:inventoryId"
            element={<EditInventoryItem />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
