import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import PageNotFound from "./PageNotFound/PageNotFound";
import PrivateRouting from "./private-routes";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouting />}>
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
