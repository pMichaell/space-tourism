import React, { Fragment, lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./ui/Layout/Layout";
import MenuContextProvider from "./context/menuContext/MenuContextProvider";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const DestinationPage = lazy(
  () => import("./pages/DestinationPage/DestinationPage")
);
const CrewPage = lazy(() => import("./pages/CrewPage/CrewPage"));
const TechnologyPage = lazy(
  () => import("./pages/TechnologyPage/TechnologyPage")
);
const DesignPage = lazy(() => import("./pages/DesignPage/DesignPage"));

function App() {
  const location = useLocation();

  return (
    <MenuContextProvider>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Suspense fallback={<Fragment />}>
            <Routes location={location} key={location.key}>
              <Route path="/" element={<HomePage />} />
              <Route path="destination" element={<DestinationPage />} />
              <Route path="crew" element={<CrewPage />} />
              <Route path="technology" element={<TechnologyPage />} />
              <Route path="design" element={<DesignPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </Layout>
    </MenuContextProvider>
  );
}

export default App;
