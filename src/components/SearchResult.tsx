import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "./Card";

const API = `https://api.mercadolibre.com/sites/MLA/search?q=`;

export default function SearchResult() {
  const { query } = useParams();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(`${API}${query}`);
      const data = await response.json();
      setProducts(data.results);
    }
    fetchApi();
    // llamada a la api
  }, [query]);

  if (products.length === 0) {
    return <p>Cargando...</p>;
  }
  return (
    <>
      <p>Resultados de la busqueda</p>
      {products.map((prod) => {
        return (
          <Card
            key={prod.id}
            src={prod.thumbnail}
            title={prod.title}
            id={prod.id}
          />
        );
      })}
    </>
  );
}
