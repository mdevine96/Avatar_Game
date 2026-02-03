export default function Tile({ status, label }) {
  return <div className={`tile ${status}`}>{label}</div>;
}