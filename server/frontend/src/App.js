import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
          path('login/', TemplateView.as_view(template_name="index.html")),
      <Route path="/dealers" element={<Dealers/>} />

    </Routes>
  );
}
export default App;
