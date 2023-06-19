import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "shared";

const Main = React.lazy(() => import("../pages/main/ui"));
const Create = React.lazy(() => import("../pages/create/ui"));

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
