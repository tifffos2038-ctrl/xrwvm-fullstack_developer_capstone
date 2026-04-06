import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
          path('login/', TemplateView.as_view(template_name="index.html")),

    </Routes>
  );
}
export default App;
