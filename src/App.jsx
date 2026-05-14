
// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import { Analytics } from "@vercel/analytics/react";
import Privacy from "./Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Analytics /> {/* 2. Add it here, outside the Routes */}
    </BrowserRouter>
  );
}

export default App;