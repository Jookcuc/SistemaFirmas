import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

export function RoutesProvider() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
////uihiuui