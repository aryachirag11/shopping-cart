import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { CartPage, HomePage } from "./pages";
function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="bg-slate-900">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
