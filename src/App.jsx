import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Layout/Sidebar/menu.jsx";
import { BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <div>
        <Router>
            <div className = "App">
                <Menu/>
            </div>
        </Router>
    </div>
  )
}

export default App
