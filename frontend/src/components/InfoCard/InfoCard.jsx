import "./InfoCard.css";

function InfoCard({ title, value }) {
  return (
    <div className="info-card">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

export default InfoCard;