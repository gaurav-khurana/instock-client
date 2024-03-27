import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from "./Components/Header/Header";

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
