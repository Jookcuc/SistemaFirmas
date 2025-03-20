import { Route, Routes, Navigate } from "react-router-dom";
import AuthRoutes from "../../module/Auth/routes";
import AppRoutesEnum from "./routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={AppRoutesEnum.LOGIN} replace />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
}
