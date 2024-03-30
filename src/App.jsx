import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";
import AddInventoryItem from "./Components/AddInventoryItem/AddInventoryItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AddInventoryItem />} />

        </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
