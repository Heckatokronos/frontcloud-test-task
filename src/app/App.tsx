import React from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import("../pages/main/ui"));
const Create = React.lazy(() => import("../pages/create/ui"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
