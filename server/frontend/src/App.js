import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';
import Dealer from "./components/Dealers/Dealer"


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
          path('login/', TemplateView.as_view(template_name="index.html")),
      <Route path="/dealers" element={<Dealers/>} />
	  <Route path="/dealer/:id" element={<Dealer/>} />

    </Routes>
  );
}
export default App;
