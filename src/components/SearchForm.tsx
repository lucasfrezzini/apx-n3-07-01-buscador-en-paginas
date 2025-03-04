type SearchFormProps = {
  onSubmit: (e: any) => void;
};

export default function SearchForm(props: SearchFormProps) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="search" name="q" placeholder="Ingrese producto" />
      <button type="submit">Buscar</button>
    </form>
  );
}
