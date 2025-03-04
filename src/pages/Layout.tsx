import { Link, Outlet, useNavigate } from "react-router";
import SearchForm from "../components/SearchForm";

export default function Layout() {
  const navigate = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();
    navigate(`/search/${e.target.q.value}`);
  }

  return (
    <>
      <nav>
        <Link to={"/"}>Home</Link>
      </nav>
      <SearchForm onSubmit={handleSubmit}></SearchForm>
      <Outlet></Outlet>
    </>
  );
}
