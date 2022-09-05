import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/home">Home</Link>
        <Link to="/pets">Pets</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Layout;