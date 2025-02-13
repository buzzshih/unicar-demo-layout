import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { MyProfile } from "./pages/MyProfile";
import { Reserve } from "./pages/Reserve";
import { FindCars } from "./pages/FindCars";
import { CarDetail } from "./pages/CarDetail";
import Commission from "./pages/Commission";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<MyProfile />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/find" element={<FindCars />} />
            <Route path="/car/:id" element={<CarDetail />} />
            <Route path="/commission" element={<Commission />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
