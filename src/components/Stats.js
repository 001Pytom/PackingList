function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> start adding some items to your parking list🚀</em>
      </p>
    );
  const numItems = items.length;

  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go ✈️"
          : ` You have ${numItems} items on your list, and you already parked
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
