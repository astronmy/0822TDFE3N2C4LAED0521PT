import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = ({authenticated}) => {
  return ( authenticated ? <Outlet/> : <Navigate to="/login" />)
}
export default ProtectedRoutes;