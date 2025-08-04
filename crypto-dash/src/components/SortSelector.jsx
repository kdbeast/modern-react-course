const SortSelector = ({ sortBy, setSortBy }) => {
  return (
    <div className="controls">
      <label htmlFor="limit">Sort By:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="market_cap_desc">Market Cap (High to Low)</option>
        <option value="market_cap_asc">Market Cap (Low to High)</option>
        <option value="price_desc">Price (High to low)</option>
        <option value="price_asc">Price (Low to High)</option>
        <option value="change_desc"> 24h Change (High to Low)</option>
        <option value="change_asc"> 24h Change (Low to High)</option>
      </select>
    </div>
  );
};

export default SortSelector;
