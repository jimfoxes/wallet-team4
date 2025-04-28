import AppRoutes from "./components/AppRoutes";

import { AuthProvider } from "./сontext/AuthProvider";
import { GlobalStyle } from "./pages/Main.styled";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
