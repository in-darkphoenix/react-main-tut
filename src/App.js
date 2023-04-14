import { Route, Routes } from "react-router-dom";
import Home from "./expense-management/pages/Home";
import Category from "./expense-management/pages/Category";
import Dashboard from "./expense-management/pages/Dashboard";
import Expense from "./expense-management/pages/Expense";
import Navbar from "./expense-management/components/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;
