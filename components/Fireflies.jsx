import "./fireflies.css"; // Make sure this path points to your fireflies.css file

const Fireflies = () => {
  const quantity = 15;
  const fireflies = [...Array(quantity)].map((_, i) => (
    <div key={i} className="firefly" />
  ));

  return <div>{fireflies}</div>;
};

export default Fireflies;
