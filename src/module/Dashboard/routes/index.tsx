import { Route, Routes } from "react-router-dom";
import { HistorialDocumentos } from "../pages";



export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="historial" element={<HistorialDocumentos />} />
    </Routes>
  );
}
