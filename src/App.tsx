import './App.css';
import SignupPage from "./pages/SignupPage";
import TopMenu from "./components/TopMenu";
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <div className="App">
        <TopMenu/>
        <SignupPage/>
    </div>
  );
}

export default App;
