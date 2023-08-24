import Navbar from "components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";
import ApparelsPage from "pages/ApparelPage";
import CollectiblesPage from "pages/CollectiblesPage";
import Footer from "components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apparel" element={<ApparelsPage />} />
        <Route path="/collectibles" element={<CollectiblesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
