import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";
import Summary from "./components/Summary";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*  Protect entire Home (which includes TopBar + Dashboard) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          {/*  These are nested routes inside Home */}
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
