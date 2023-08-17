import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Price from "./components/Price";
import Shop from "./components/Shop";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import MainLayout from "./layouts/MainLayout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}
          >
            <Route
              index
              element={<Home />}
            />

            <Route
              path="news"
              element={<News />}
            />

            <Route
              path="price"
              element={<Price />}
            />
            <Route
              path="shop"
              element={<Shop />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
