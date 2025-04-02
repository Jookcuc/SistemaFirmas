import { Route, Routes } from "react-router-dom";
import { AuthMailPage, LoginPage, RegisterPage, ForgotPassword } from "../pages";



export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="authMail" element={<AuthMailPage />} />
      <Route path="forgotpassword" element={<ForgotPassword />} />
    </Routes>
  );
}
