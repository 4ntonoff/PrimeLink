import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./assets/screens/Onboarding";
import LoginPage from "./assets/screens/LoginPage";

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
