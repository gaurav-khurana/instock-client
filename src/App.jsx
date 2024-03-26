import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
        <Route path="/*" element={<PageNotFound />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
