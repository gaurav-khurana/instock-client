import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import HomePageWarehouse from "./pages/HomePageWarehouse/HomePageWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import WarehouseEdit from "./pages/WarehouseEdit/WarehouseEdit";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import AddInventoryItem from "./Components/AddInventoryItem/AddInventoryItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>

        <Route path="/*" element={<PageNotFound />} />
        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
