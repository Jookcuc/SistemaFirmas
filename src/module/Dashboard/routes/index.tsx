import { Route, Routes } from "react-router-dom";
import { HistorialDocumentos, Profile } from "../pages";




export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="history" element={<HistorialDocumentos />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}
