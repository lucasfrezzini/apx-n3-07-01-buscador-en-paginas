import { Routes, Route } from "react-router";
import Layout from "./pages/Layout";
import SearchResult from "./components/SearchResult";
import Home from "./components/Home";
import Resume from "./components/Resume";

export default function RouterApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="search/:query" element={<SearchResult />}></Route>
        <Route path="item/:id" element={<Resume />}></Route>
      </Route>
    </Routes>
  );
}
