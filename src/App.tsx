import { ThemeProvider } from "@emotion/react";
import { RoutesProvider } from "./core/routes";
import { firmasTheme } from "./core/theme";

function App() {
  return (
    <ThemeProvider theme={firmasTheme}>
      <RoutesProvider />
    </ThemeProvider>
  );
}

export default App;
