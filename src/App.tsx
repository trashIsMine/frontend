import './App.css';
import LandingPage from "./pages/LandingPage";
import TopMenu from "./components/landingpagecomponent/TopMenu";

function App() {
  return (
    <div className="App">
        <TopMenu/>
        <LandingPage/>
    </div>
  );
}

export default App;
