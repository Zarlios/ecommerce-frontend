import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ApparelsPage from "../pages/ApparelPage";
import CollectiblesPage from "../pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<ApparelsPage />} />
        <Route path="/expenses" element={<CollectiblesPage />} />
      </Routes>
    </>
  );
}

export default App;
