
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import MenuPage from './pages/MenuPage'
import Pagenotfound from'./pages/Pagenotfound'


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>} />
<Route path="/About" element={<About/>} />
<Route path="/Contact" element={<Contact/>} />
<Route path="/MenuPage" element={< MenuPage/>} />
<Route path="*" element={<Pagenotfound/>} />

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
