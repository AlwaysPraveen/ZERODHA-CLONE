
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import Home from "./components/Home";
import './App.css'
import ProtectedRoute from "./ProtectedRoute";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
