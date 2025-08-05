import { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
import CoinDetailsPage from "./pages/coin-details";
const API_URL = import.meta.env.VITE_COINS_API_URL;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(5);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        if (!res.ok) {
          throw new Error(
            res.status === 429 ? "Too Many Requests" : "Failed to fetch data"
          );
        }

        const data = await res.json();
        setCoins(data);
        sessionStorage.setItem("coins", JSON.stringify(data));
      } catch (err) {
        if (sessionStorage.getItem("coins")) {
          setCoins(JSON.parse(sessionStorage.getItem("coins")));
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
  }, [limit]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/coins/:id" element={<CoinDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
