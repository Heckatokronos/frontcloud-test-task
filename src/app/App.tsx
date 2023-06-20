import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { LoadingSpinner } from "shared";

const Main = React.lazy(() => import("../pages/main/ui"));
const Create = React.lazy(() => import("../pages/create/ui"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Suspense>
  );
}

export default App;
