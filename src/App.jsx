import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>

        TODO
        {/* <Route path="/InventoryDetails" element={<InventoryDetails />} /> */}
        <Route path="/*" element={<InventoryDetails />} />
        {/* <Route path="/*" element={<PageNotFound />} /> */}


        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
