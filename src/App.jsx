import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import HomePageWarehouse from "./pages/HomePageWarehouse/HomePageWarehouse";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageWarehouse />} />
          <Route
            path="/warehouses/:id/inventories"
            element={<WarehouseDetails />}
          />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
