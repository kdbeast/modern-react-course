const Star = ({
  star,
  rating,
  hover,
  color,
  ratingClick,
  hoverEnter,
  hoverLeave,
}) => {
  return (
    <div>
      <span
        style={{ color: star <= (hover || rating) ? color : "#ccc" }}
        className="star"
        onClick={() => ratingClick(star)}
        onMouseEnter={() => hoverEnter(star)}
        onMouseLeave={() => hoverLeave(null)}
      >
        {"\u2605"}
      </span>
    </div>
  );
};

export default Star;
