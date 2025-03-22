import { Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";



export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      
    </Routes>
  );
}
