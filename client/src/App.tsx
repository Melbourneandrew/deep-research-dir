import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HomeView from "@/components/views/HomeView";
import AboutView from "@/components/views/AboutView";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
