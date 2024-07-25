import './App.css';
import LandingPage from "./pages/LandingPage";
import TopMenu from "./components/TopMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";
import IntroPage from "./pages/IntroPage";
import LoginPage from "./pages/LoginPage";
import NoticePage from "./pages/NoticePage";
import CommunityPage from "./pages/CommunityPage";

function App() {
  return (
      <Router>
          <div className="App">
            <TopMenu />
            <Routes>
              <Route path={`${process.env.PUBLIC_URL}/`} element={<LandingPage />} />
              <Route path={`${process.env.PUBLIC_URL}/map`} element={<MapPage />} />
              <Route path={`${process.env.PUBLIC_URL}/intro`} element={<IntroPage />} />
              <Route path={`${process.env.PUBLIC_URL}/login`} element={<LoginPage />} />
              <Route path={`${process.env.PUBLIC_URL}/notices`} element={<NoticePage />} />
              <Route path={`${process.env.PUBLIC_URL}/community`} element={<CommunityPage />} />
            </Routes>
          </div>
      </Router>
  );
}

export default App;
