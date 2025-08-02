const LimitSelector = ({ limit, setLimit }) => {
  return (
    <div className="controls">
      <label htmlFor="limit">Limit:</label>
      <select
        value={limit}
        id="limit"
        onChange={(e) => setLimit(e.target.value)}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
    </div>
  );
};

export default LimitSelector;
