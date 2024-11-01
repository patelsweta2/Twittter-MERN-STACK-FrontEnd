import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Loadings from "./components/Loading/Loadings.jsx";
import { store } from "./store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loadings />}>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  </Suspense>
);
