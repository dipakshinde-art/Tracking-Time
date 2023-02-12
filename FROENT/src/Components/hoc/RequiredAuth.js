import { Navigate } from "react-router-dom";
import { loadData } from "./LocalStorage";

export const RequiredAuth = ({ children }) => {
  let isAuth = loadData("isAuth");
  console.log(isAuth)
  if (isAuth == 'true') {
    return children;
  }else{

      return <Navigate to="/login" />;
  }
};
