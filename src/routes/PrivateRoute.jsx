import { Route } from "react-router-dom";
const PrivateRoute = ({children}) => {
  const {isAuthenticated,isLoading} = useAuth();
  const location = useLocation();
    if(isLoading){
        return (
            <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }
    if(!isAuthenticated){
        return <Navigate to="/login" state={{from:location.pathname}} replace/>;
    }
    return children;

};
//  import { Outlet,Navigate,useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext"
export default PrivateRoute;
