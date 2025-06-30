import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Ques from './component/Ques';
import Java from './component/Java';
import Phython from './component/Phython';
import Htm from './component/Htm';
import Csa from './component/Csa';
import Sq from './component/Sq';
import Maths from './component/Maths';
import Techology from './component/Techology';
import Flutter from './component/Flutter';
import './App.css';


function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/ques" element={<Ques/>}/>
    <Route path="/java" element={<Java/>}/>
    <Route path="/phython" element={<Phython/>}/>
    <Route path="/html" element={<Htm/>}/>
    <Route path="/css" element={<Csa/>}/>
    <Route path="/sql" element={<Sq/>}/>
    <Route path="/maths" element={<Maths/>}/>
    <Route path="/techo" element={<Techology/>}/>
    <Route path="/flutter" element={<Flutter/>}/>
  </Routes>
</Router>
    </div>
  );
}
export default App;
