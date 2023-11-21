import { Routes as Router } from "react-router-dom";
import Routes from "./Routes";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
}

export default App;
