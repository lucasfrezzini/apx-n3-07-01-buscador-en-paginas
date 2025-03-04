import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const API = `https://api.mercadolibre.com/items/`;

export default function Resume() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(`${API}${id}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchApi();
    // llamada a la api
  }, [id]);

  if (Object.keys(product).length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div
      style={{
        marginBottom: "30px",
        border: "1px solid white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <img src={product.thumbnail} alt={product.title} />
      <h5>{product.title}</h5>
      <h6>Precio: ${product.price}</h6>
      <Link to={`/item/${id}`}>Ver mas</Link>
    </div>
  );
}
