import { Link } from "react-router";

type CardProps = {
  title: string;
  src: string;
  id: string;
};

export default function Card({ title, src, id }: CardProps) {
  return (
    <div
      style={{
        marginBottom: "30px",
        border: "1px solid white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img src={src} alt={title} />
      <h5>{title}</h5>
      <Link to={`/item/${id}`}>Ver mas</Link>
    </div>
  );
}
